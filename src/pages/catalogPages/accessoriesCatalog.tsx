import { Pagination } from '../../components/Pagination/Pagination';

export const AccessoriesCatalog = () => (
  <>
    <h1>Accessories Catalog Page</h1>
    <Pagination
      totalCount={32}
      pageSize={16}
      siblingCount={1}
      currentPage={1}
    />
  </>
);
