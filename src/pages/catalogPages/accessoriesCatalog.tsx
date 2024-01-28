import { ProductCard } from '../../components/ProductCard/ProductCard';
import { Pagination } from '../../components/Pagination/Pagination';
import styles from './catalog.module.scss';
import { SortParams } from '../../components/SortParams/SortParams';
import { useCatalogParams } from '../../CustomHooks/UseCatalogParams';

export const AccessoriesCatalog = () => {
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
      <h1 className={styles.catalog__header}>Accessories</h1>
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
