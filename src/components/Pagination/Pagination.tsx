import { FC } from 'react';
import { Link } from 'react-router-dom';
import { usePagination } from '../../CustomHooks/UsePagination';

interface Props {
  totalCount: number,
  pageSize: number,
  siblingCount: number,
  currentPage: number,
}
export const Pagination: FC<Props> = (props) => {
  const {
    totalCount,
    pageSize,
    siblingCount = 1,
    currentPage,
  } = props;

  const paginationRange = usePagination({
    totalCount,
    pageSize,
    siblingCount,
    currentPage,
  });

  return (
    <div>
      <Link>
        &lt;
      </Link>
      {paginationRange.map(currenNumber => (
        <Link>
          {currenNumber}
        </Link>
      ))}
      <Link>
        &gt;
      </Link>
    </div>
  );
};
