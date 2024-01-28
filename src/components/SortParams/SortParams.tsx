import { FC } from 'react';
import Select from 'react-select';
import styles from './SortBy.module.scss';
import { Option, customStyles } from './customStyles';

interface Props {
  handleSelectChange: (value:string,
    limit:string) => void;
}

const optionsPageLimit: Option[] = [
  { value: '4', label: '4' },
  { value: '8', label: '8' },
  { value: '16', label: '16' },
  { value: 'All', label: 'All' },
];
const optionsSortDirection: Option[] = [
  { value: 'ASC', label: 'Up' },
  { value: 'DESC', label: 'Down' },
];

const optionsSortParams = [
  { value: 'price', label: 'price' },
  { value: 'year', label: 'year' },
];

const limitDefaultValue = optionsPageLimit[optionsPageLimit.length - 1];
const directionDefalultValue = optionsSortDirection[optionsSortDirection
  .length - 1];
const sortDefaultValue = optionsSortParams[0];

export const SortParams: FC<Props> = (props) => {
  const { handleSelectChange } = props;

  const handleChange = (selectedOption: Option | null) => {
    const pagelimitValues = optionsPageLimit.map(({ value }) => value);
    const sortByValues = optionsSortDirection.map(({ value }) => value);
    const sortParamsValues = optionsSortParams.map(({ value }) => value);

    if (selectedOption && pagelimitValues.includes(selectedOption.value)) {
      handleSelectChange(selectedOption.value, 'limit');
    }

    if (selectedOption && sortByValues.includes(selectedOption.value)) {
      handleSelectChange(selectedOption.value, 'direction');
    }

    if (selectedOption && sortParamsValues.includes(selectedOption.value)) {
      handleSelectChange(selectedOption.value, 'order');
    }
  };

  return (
    <div className={styles.catalog__sort}>
      <div className={styles['catalog__sort--by']}>
        <p className={styles['catalog__sort--label']}>Sort by</p>
        <Select<Option, false>
          options={optionsSortParams}
          styles={customStyles}
          onChange={handleChange}
          defaultValue={sortDefaultValue}
        />
      </div>
      <div className={styles['catalog__sort--limit']}>
        <p className={styles['catalog__sort--label']}>Items on page</p>
        <Select<Option, false>
          options={optionsPageLimit}
          styles={customStyles}
          onChange={handleChange}
          defaultValue={limitDefaultValue}
        />
      </div>
      <div className={styles['catalog__sort--direction']}>
        <p className={styles['catalog__sort--label']}>Sort direction</p>
        <Select<Option, false>
          options={optionsSortDirection}
          styles={customStyles}
          onChange={handleChange}
          defaultValue={directionDefalultValue}
        />
      </div>
    </div>
  );
};
