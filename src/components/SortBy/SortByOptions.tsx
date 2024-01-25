import { FC } from 'react';
import { SetURLSearchParams } from 'react-router-dom';

interface Props {
  setSearchParams: SetURLSearchParams;
}
export const SortByOptions: FC<Props> = (props) => {
  const { setSearchParams } = props;
  const sortByParams = ['price', 'age', 'title'];

  return (
    <select
      name=""
      id=""
      onChange={(event) => setSearchParams({ order: event.target.value })}
    >
      {sortByParams.map(param => (
        <option value={param}>{param}</option>
      ))}
    </select>
  );
};
