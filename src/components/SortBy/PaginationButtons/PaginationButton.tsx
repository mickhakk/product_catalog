import { FC } from 'react';
import styles from './PaginationButton.module.scss';

interface Props {
  handleSelectChange: (value:React.ChangeEvent<HTMLSelectElement>,
    limit:string) => void;
  limit:string
}
export const PaginationButton: FC<Props> = (props) => {
  const { handleSelectChange, limit } = props;
 
  const paginationValues = ['4', '8', '16'];

  return (
    <select
      className={styles.limit}
      value={limit}
      name=""
      id=""
      onChange={(event) => handleSelectChange(event, 'limit')}
    >
      <option value="all" selected>All</option>
      {paginationValues.map(value => (
        <option value={value}>{value}</option>
      ))}
    </select>
  );
};
