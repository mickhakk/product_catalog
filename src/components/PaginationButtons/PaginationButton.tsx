import { FC } from 'react';
import { SetURLSearchParams } from 'react-router-dom';
// import { getSearchWith } from '../../utils/searchHelper';

interface Props {
  setSearchParams: SetURLSearchParams;
}
export const PaginationButton: FC<Props> = (props) => {
  const { setSearchParams } = props;
  const paginationValues = ['4', '8', '16', 'all'];

  return (
    <select
      name=""
      id=""
      onChange={(event) => setSearchParams({ limit: event.target.value })}
    >
      {paginationValues.map(value => (
        <option value={value}>{value}</option>
      ))}
    </select>
  );
};
