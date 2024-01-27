import { useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { Pagination } from '../../components/Pagination/Pagination';
import { useContextProvider } from '../../context/ProductsContext';
import styles from './catalog.module.scss';
import {
  PaginationButton,
} from
  '../../components/SortBy/PaginationButtons/PaginationButton';
import { SortByOptions } from '../../components/SortBy/SortByOptions';
import { SortByDirecton }
  from '../../components/SortBy/SortByDirection/SortByDirection';
import { SearchParams, getSearchWith } from '../../utils/searchHelper';

const siblingCount = 1;

export const PhonesCatalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') || '';
  const limit = searchParams.get('limit') || 'all';
  const order = searchParams.get('order') || '';
  const direction = searchParams.get('direction') || '';
  const {
    products,
    setParams,
  } = useContextProvider();

  const setSearchWith = useCallback((params:SearchParams) => {
    const search = getSearchWith(searchParams, params);

    setSearchParams(search);
  }, [searchParams, setSearchParams]);

  const handleSelectChange = (event: string,
    value:string) => {
    setSearchWith({ [value]: event || null });
  };

  const checkPageValue = useCallback(() => {
    const totalProductCount = products?.count || 1;
    const limitToNumer = Number(limit) || 1;
    const totalPages = Math.ceil(totalProductCount / limitToNumer);

    if (Number(page) && totalPages < Number(page)) {
      setSearchWith({ page: null });

      return '';
    }

    return Number(page) > 1 ? Number(page) - 1 : 0;
  }, [limit, page, products?.count, setSearchWith]);

  useEffect(() => {
    setParams(newParams => ({
      ...newParams,
      page: +checkPageValue(),
      limit,
      order,
      direction,
    }));
  }, [checkPageValue, setParams, limit, order, direction]);

  return (
    <section className={styles.catalog}>
      <h1 className={styles.catalog__header}>Mobile phones</h1>
      <p className={styles.catalog__count}>
        {`${products?.count} modeles`}
      </p>
      <div className={styles.catalog__sort}>
        <div className={styles['catalog__sort--by']}>
          <p className={styles['catalog__sort--label']}>Sort by</p>
          {/* <SortByOptions
            handleSelectChange={handleSelectChange}
            order={order}
          /> */}
        </div>
        <div className={styles['catalog__sort--limit']}>
          <p className={styles['catalog__sort--label']}>Items on page</p>
          <PaginationButton
            handleSelectChange={handleSelectChange}
            limit={limit}
          />
        </div>
        <div>
          <p className={styles['catalog__sort--label']}>Sort direction</p>
          <SortByDirecton
            // handleSelectChange={handleSelectChange}
            direction={direction}
          />
        </div>
      </div>
      <div className={styles.catalog__container}>
        {products?.rows.map(currentProduct => (
          <ProductCard product={currentProduct} />
        ))}
      </div>
      <Pagination
        totalCount={products?.count || 0}
        limit={limit}
        siblingCount={siblingCount}
        page={page}
        searchParams={searchParams}
      />
    </section>
  );
};
