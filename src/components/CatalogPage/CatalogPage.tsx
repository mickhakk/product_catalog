import { FC } from 'react';
import { useCatalogParams } from '../../CustomHooks/UseCatalogParams';
import { Pagination } from '../Pagination/Pagination';
import { ProductCard } from '../ProductCard/ProductCard';
import { SortParams } from '../SortParams/SortParams';
import styles from './catalog.module.scss';

interface Props {
  pageHeader: string;
}
export const CatalogPage: FC<Props> = (props) => {
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
  } = useCatalogParams();

  return (
    <section className={styles.catalog}>
      <h1 className={styles.catalog__header}>{pageHeader}</h1>
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
      <div className={styles['catalog__pagination-container']}>
        <Pagination
          totalCount={productsCount || 0}
          limit={limit}
          siblingCount={siblingCount}
          page={page}
          searchParams={searchParams}
        />
      </div>
    </section>
  );
};
