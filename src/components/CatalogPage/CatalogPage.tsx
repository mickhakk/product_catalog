import {
  FC,
  memo,
  useEffect,
  useState,
} from 'react';
import { useCatalogParams } from '../../CustomHooks/UseCatalogParams';
import { Pagination } from '../Pagination/Pagination';
import { ProductCard } from '../ProductCard/ProductCard';
import { SortParams } from '../SortParams/SortParams';
import styles from './catalog.module.scss';
import { NoProducts } from './Messages/NoProducts';
import { Loader } from './Loader/Loader';
import { useContextProvider } from '../../context/ProductsContext';
import { ErrorMessage } from './Messages/ErrorMesage';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';

interface Props {
  pageHeader: string;
}
export const CatalogPage: FC<Props> = memo((props) => {
  const [isLoadingPage, setIsLoadingPage] = useState(true);
  const { isError } = useContextProvider();
  const { pageHeader } = props;
  const {
    handleSelectChange,
    siblingCount,
    productsCount,
    productsCatalog,
    limit,
    page,
    searchParams,
    handleLimitChange,
    catalogPath,
    totalPages,
  } = useCatalogParams();

  useEffect(() => {
    setTimeout(() => {
      setIsLoadingPage(false);
    }, 300);
  }, []);

  return (
    <section className={styles.catalog}>
      <Breadcrumbs />
      <h1 className={styles.catalog__header}>{pageHeader}</h1>
      {isLoadingPage && <Loader />}
      {!productsCatalog?.length && !isLoadingPage && !isError
      && <NoProducts product={catalogPath} />}
      {!isLoadingPage && isError && <ErrorMessage />}
      {!isLoadingPage && !isError && productsCatalog
      && productsCatalog?.length > 0 && (
        <>
          <p className={styles.catalog__count}>
            {`${productsCount} modeles`}
          </p>
          <SortParams
            handleSelectChange={handleSelectChange}
            handleLimitChange={handleLimitChange}
          />
          <div className={styles.catalog__container}>
            {productsCatalog?.map(currentProduct => (
              <ProductCard product={currentProduct} />
            ))}
          </div>
          {totalPages > 1 && (
            <div className={styles['catalog__pagination-container']}>
              <Pagination
                totalCount={productsCount || 0}
                limit={limit}
                siblingCount={siblingCount}
                page={page}
                searchParams={searchParams}
              />
            </div>
          )}
        </>
      )}
    </section>
  );
});
