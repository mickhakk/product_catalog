import { Pagination } from '../../components/Pagination/Pagination';

export const TabletsCatalog = () => {
  return (
    <>
      <h1>Tablets Catalog Page</h1>
      <Pagination
        totalCount={17}
        pageSize={16}
        siblingCount={1}
        currentPage={1}
      />
    </>
  );
};
