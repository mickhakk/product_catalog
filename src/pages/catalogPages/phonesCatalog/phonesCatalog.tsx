// import { Product } from '../../types/Product';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductCard } from '../../../components/ProductCard/ProductCard';
import { Pagination } from '../../../components/Pagination/Pagination';
import { useContextProvider } from '../../../context/ProductsContext';
import styles from './phonesCatalog.module.scss';
import {
  PaginationButton,
} from '../../../components/PaginationButtons/PaginationButton';
import { SortByOptions } from '../../../components/SortBy/SortByOptions';
// import { getSearchWith } from '../../../utils/searchHelper';

// const product: Product = {
//   id: 1,
//   category: 'phones',
//   itemId: 'apple-iphone-11-pro-max-256gb-silver',
//   name: 'Apple iPhone 11 Pro Max 256GB Silver',
//   fullPrice: 999,
//   price: 700,
//   screen: '6.1” OLED',
//   capacity: '256GB',
//   color: 'silver',
//   ram: '6GB',
//   year: 2020,
//   image: 'img/phones/apple-iphone-7/black/00.jpg',
// };
const siblingCount = 1;

export const PhonesCatalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') || '1';
  const limit = searchParams.get('limit') || '16';
  const order = searchParams.get('order') || 'price';
  const limitToNumber = Number(limit);

  const pageToNum = Number(page) - 1;
  const {
    products,
    setParams,
  } = useContextProvider();

  useEffect(() => {
    setParams(newParams => ({
      ...newParams,
      page: pageToNum,
      limit,
      order,
    }));
  }, [pageToNum, setParams, limit, order]);

  return (
    <>
      <h1>Phones Catalog Page</h1>
      <PaginationButton
        setSearchParams={setSearchParams}
      />
      <SortByOptions setSearchParams={setSearchParams} />
      <div className={styles['phone-catalog']}>
        {products?.rows.map(currentProduct => (
          <ProductCard product={currentProduct} />
        ))}
      </div>
      <Pagination
        totalCount={products?.count || 0}
        pageSize={limitToNumber}
        siblingCount={siblingCount}
        page={page}
        searchParams={searchParams}
      />
    </>
  );
};
