import { useMemo } from 'react';

interface Props {
  totalCount: number,
  pageSize: number,
  siblingCount: number,
  currentPage: number,
}
export const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
}: Props) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);

  }, [totalCount, pageSize, siblingCount, currentPage ])
};
