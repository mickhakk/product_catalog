import { useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { Pagination } from '../../components/Pagination/Pagination';
import { useContextProvider } from '../../context/ProductsContext';
import styles from './catalog.module.scss';
import { SearchParams, getSearchWith } from '../../utils/searchHelper';
import { SortParams } from '../../components/SortParams/SortParams';

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
      <SortParams handleSelectChange={handleSelectChange} />
      {/* <div className={styles.catalog__sort}>
        <div className={styles['catalog__sort--by']}>
          <p className={styles['catalog__sort--label']}>Sort by</p>
        </div>
        <div className={styles['catalog__sort--limit']}>
          <p className={styles['catalog__sort--label']}>Items on page</p>
          <PaginationButton
            handleSelectChange={handleSelectChange}
          />
        </div>
        <div>
          <p className={styles['catalog__sort--label']}>Sort direction</p>
        </div>
      </div> */}
      <div className={styles.catalog__container}>
        {products?.rows.map(currentProduct => (
          <ProductCard product={currentProduct} />
        ))}
      </div>
      <div className={styles['catalog__pagination-container']}>
        <Pagination
          totalCount={products?.count || 0}
          limit={limit}
          siblingCount={siblingCount}
          page={page}
          searchParams={searchParams}
        />
      </div>
    </section>
  );
};
