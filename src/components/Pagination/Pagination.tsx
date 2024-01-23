import { FC } from 'react';
import { Link } from 'react-router-dom';
import { usePagination } from '../../CustomHooks/UsePagination';
import styles from '../Pagination/pagination.module.scss';
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

    <ul className={styles['pagination-container']}>
      <li>
      <Link className={styles['pagination-item']} to='/'>
      <svg className={styles.arrow} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4715 3.52861C10.2111 3.26826 9.78903 3.26826 9.52868 3.52861L5.52868 7.52861C5.26833 7.78896 5.26833 8.21107 5.52868 8.47141L9.52868 12.4714C9.78903 12.7318 10.2111 12.7318 10.4715 12.4714C10.7318 12.2111 10.7318 11.789 10.4715 11.5286L6.94289 8.00001L10.4715 4.47141C10.7318 4.21107 10.7318 3.78896 10.4715 3.52861Z" fill=""/>
      </svg>
      </Link>
      </li>
      {paginationRange.map(currenNumber => (
        <li key={currenNumber}>
          <Link className={styles['pagination-item']} to={`/page=${currenNumber}`}>
            {currenNumber}
          </Link>
        </li>
      ))}
      <li>
        <Link className={styles['pagination-item']} to='/'>
        <svg className={styles.arrow} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path  fill-rule="evenodd" clip-rule="evenodd" d="M5.52876 3.52861C5.78911 3.26826 6.21122 3.26826 6.47157 3.52861L10.4716 7.52861C10.7319 7.78896 10.7319 8.21107 10.4716 8.47141L6.47157 12.4714C6.21122 12.7318 5.78911 12.7318 5.52876 12.4714C5.26841 12.2111 5.26841 11.789 5.52876 11.5286L9.05735 8.00001L5.52876 4.47141C5.26841 4.21107 5.26841 3.78896 5.52876 3.52861Z" fill=''/>
        </svg>
        </Link>
      </li>
    </ul>
  );
};
