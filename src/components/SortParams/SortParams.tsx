import { FC } from 'react';
import Select from 'react-select';
import styles from './SortBy.module.scss';
import {
  CombinedOption,
  Option,
  OptionLimit,
  customStyles,
} from './customStyles';
import { useContextProvider } from '../../context/ProductsContext';
import { SelectValue } from '../../CustomHooks/UseCatalogParams';

interface Props {
  handleSelectChange: (value:SelectValue) => void;
  handleLimitChange: (event: string, value: string) => void;
}

const optionsPageLimit: OptionLimit[] = [
  { value: '4', label: '4' },
  { value: '8', label: '8' },
  { value: '16', label: '16' },
  { value: 'All', label: 'All' },
];

const optionsSortParams:Option[] = [
  { value: { order: 'price', direction: 'desc' }, label: 'Price: High to low' },
  { value: { order: 'price', direction: 'asc' }, label: 'Price: Low to High' },
  { value: { order: 'year', direction: 'desc' }, label: 'Newest' },
  { value: { order: 'year', direction: 'asc' }, label: 'Old(but fashion)' },

];

const limitDefaultValue = optionsPageLimit[optionsPageLimit.length - 1];
const sortDefaultValue = optionsSortParams[0];

export const SortParams: FC<Props> = (props) => {
  const { handleSelectChange, handleLimitChange } = props;
  const { isLoading, setIsLoading } = useContextProvider();
  const handleChange = (selectedOption: CombinedOption | null) => {
    if (selectedOption && typeof selectedOption.value === 'string') {
      handleLimitChange(selectedOption.value, 'limit');
    }
  };

  const handleSortChange = (selectedOption: CombinedOption | null) => {
    if (selectedOption && typeof selectedOption.value === 'object') {
      const { direction, order } = selectedOption.value;

      setIsLoading(true);
      handleSelectChange({ order, direction });
    }
  };

  return (
    <div className={styles.catalog__sort}>
      <div className={styles['catalog__sort--by']}>
        <p className={styles['catalog__sort--label']}>Sort by</p>
        <Select<CombinedOption, false>
          options={optionsSortParams}
          styles={customStyles}
          onChange={handleSortChange}
          defaultValue={sortDefaultValue}
          isLoading={isLoading}
          className={styles['react-select-container']}
        />
      </div>
      <div className={styles['catalog__sort--limit']}>
        <p className={styles['catalog__sort--label']}>Items on page</p>
        <Select<CombinedOption, false>
          options={optionsPageLimit}
          styles={customStyles}
          onChange={handleChange}
          defaultValue={limitDefaultValue}
          isLoading={isLoading}
          className={styles['react-select-container']}
        />
      </div>
      {/* <div className={styles['catalog__sort--direction']}>
        <p className={styles['catalog__sort--label']}>Sort direction</p>
        <Select<Option, false>
          options={optionsSortDirection}
          styles={customStyles}
          onChange={handleChange}
          defaultValue={directionDefalultValue}
          isLoading={isLoading}
        />
      </div> */}
    </div>
  );
};
