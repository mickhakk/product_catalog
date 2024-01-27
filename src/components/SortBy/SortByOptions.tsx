import { FC } from 'react';

interface Props {
  handleSelectChange: (value:React.ChangeEvent<HTMLSelectElement>,
    limit:string) => void;
  order: string;
}
export const SortByOptions: FC<Props> = (props) => {
  const { handleSelectChange, order } = props;
  const sortByParams = ['price', 'year'];

  return (
    <select
      name=""
      id=""
      value={order}
      onChange={(event) => handleSelectChange(event, 'order')}
    >
      {sortByParams.map(param => (
        <option
          key={param}
          value={param}
          selected={param === 'price'}
        >
          {param}
        </option>
      ))}
    </select>
  );
};
