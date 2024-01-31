import { FC, useState } from 'react';
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
import { SearchParams } from '../../utils/searchHelper';

interface Props {
  handleSelectChange: (value:SelectValue) => void;
  handleLimitChange: (event: string, value: string) => void;
  sort: string;
  directionParam: string;
  limit: string;
  setSearchWith: (value: SearchParams) => void,
  page: string;
}

const optionsPageLimit: OptionLimit[] = [
  { value: '4', label: '4' },
  { value: '8', label: '8' },
  { value: '16', label: '16' },
  { value: '', label: 'All' },
];

const optionsSortParams:Option[] = [
  { value: { order: 'price', direction: 'desc' }, label: 'Price: High to low' },
  { value: { order: 'price', direction: 'asc' }, label: 'Price: Low to High' },
  { value: { order: 'year', direction: 'desc' }, label: 'Newest' },
  { value: { order: 'year', direction: 'asc' }, label: 'Old(but fashion)' },

];

export const SortParams: FC<Props> = (props) => {
  const {
    handleSelectChange,
    handleLimitChange,
    sort,
    directionParam,
    limit,
    setSearchWith,
    page,
  } = props;
  const resetPage = { page: null };
  const limitDefaultValue = optionsPageLimit
    .find(pageLimit => pageLimit.value === limit)
    || optionsPageLimit[optionsPageLimit.length - 1];
  const sortDefaultValue = optionsSortParams
    .find(sortParam => sortParam.value.order === sort
    && sortParam.value.direction === directionParam) || optionsSortParams[0];
  const [selectedLimit,
    setSelectedLimmit] = useState<CombinedOption>(limitDefaultValue);
  const [selectedSort,
    setSelectedSort] = useState<CombinedOption>(sortDefaultValue);
  const {
    isLoadingLimit,
    setIsLoadingLimit,
    isLoadingSort,
    setIsLoadingSort,
  } = useContextProvider();

  const handleChange = (selectedOption: CombinedOption | null) => {
    if (selectedOption?.value === selectedLimit.value) {
      return;
    }

    if (selectedOption && typeof selectedOption.value === 'string') {
      setSelectedLimmit(selectedOption);
      setIsLoadingLimit(true);

      handleLimitChange(selectedOption.value, 'limit');
      if (page && Number(page) > 1) {
        setSearchWith(resetPage);
      }
    }
  };

  const handleSortChange = (selectedOption: CombinedOption | null) => {
    if (selectedOption?.value === selectedSort.value) {
      return;
    }

    if (selectedOption && typeof selectedOption.value === 'object') {
      const { order, direction } = selectedOption.value;

      setSelectedSort(selectedOption);
      setIsLoadingSort(true);
      handleSelectChange({ order, direction });
      if (page && Number(page) > 1) {
        setSearchWith(resetPage);
      }
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
          isLoading={isLoadingSort}
          className={styles['react-select-container']}
          isDisabled={isLoadingSort}
        />
      </div>
      <div className={styles['catalog__sort--limit']}>
        <p className={styles['catalog__sort--label']}>Items on page</p>
        <Select<CombinedOption, false>
          options={optionsPageLimit}
          styles={customStyles}
          onChange={handleChange}
          defaultValue={limitDefaultValue}
          isLoading={isLoadingLimit}
          className={styles['react-select-container']}
          isDisabled={isLoadingLimit}
        />
      </div>
    </div>
  );
};
