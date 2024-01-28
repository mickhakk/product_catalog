import { FC } from 'react';

interface Props {
  handleSelectChange: (value:React.ChangeEvent<HTMLSelectElement>,
    order:string) => void;
  direction: string;
}
export const SortByDirecton: FC<Props> = (props) => {
  const { handleSelectChange, direction } = props;
  const sortDirections = ['ASC', 'DESC'];

  return (
    <select
      name=""
      id=""
      value={direction}
      onChange={(event) => handleSelectChange(event, 'direction')}
    >
      {sortDirections.map(param => (
        <option key={param} value={param}>{param}</option>
      ))}
    </select>
  );
};
