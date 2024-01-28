import { FC } from 'react';
import Select, {
  GroupBase,
  OptionProps,
  StylesConfig,
} from 'react-select';
import styles from './SortBy.module.scss';

interface Props {
  handleSelectChange: (value:string,
    limit:string) => void;
}

export const SortParams: FC<Props> = (props) => {
  const { handleSelectChange } = props;

  interface Option {
    value:string,
    label:string,
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

  const getBackgroundColor = (state: OptionProps<Option, boolean>) => {
    if (state.isFocused && !state.isSelected) {
      return '#FAFBFC';
    }

    if (state.isSelected) {
      return '#313237';
    }

    return '#FFFFFF';
  };

  const getColor = (state:OptionProps<Option, boolean>) => {
    if (state.isSelected) {
      return '#ffffff';
    }

    if (state.isFocused) {
      return '#313237';
    }

    return '#89939A';
  };

  const customStyles:StylesConfig<Option, false, GroupBase<Option>> = {
    control: (base, state) => ({
      ...base,
      border: '1px solid #B4BDC3',
      font: 'Mont',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: '21px',
      borderRadius: 0,
      borderColor: state.isFocused ? '#313237' : '#B4BDC3',
      boxShadow: 'none',
      '&:hover': {
        borderColor: '#89939A',
      },
    }),
    menu: (base) => ({
      ...base,
      borderRadius: 0,
    }),
    indicatorSeparator: (base) => ({
      ...base,
      height: 0,
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: getBackgroundColor(state),
      color: getColor(state),
      font: 'Mont',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '21px',
      ':active': {
        background: 'none',
      },
    }),
    dropdownIndicator: (base, state) => ({
      ...base,
      transition: 'transform 0.5 ease',
      transform: state.isFocused ? 'rotate(180deg)' : 'rotate(0)',
    }),
  };

  return (
    <div className={styles.catalog__sort}>
      <div className={styles['catalog__sort--by']}>
        <p className={styles['catalog__sort--label']}>Sort by</p>
        <Select<Option, false>
          options={optionsSortParams}
          styles={customStyles}
          onChange={handleChange}
          defaultValue={optionsSortParams[0]}
        />
      </div>
      <div className={styles['catalog__sort--limit']}>
        <p className={styles['catalog__sort--label']}>Items on page</p>
        <Select<Option, false>
          options={optionsPageLimit}
          styles={customStyles}
          onChange={handleChange}
          defaultValue={optionsPageLimit[optionsPageLimit.length - 1]}
        />
      </div>
      <div className={styles['catalog__sort--direction']}>
        <p className={styles['catalog__sort--label']}>Sort direction</p>
        <Select<Option, false>
          options={optionsSortDirection}
          styles={customStyles}
          onChange={handleChange}
          defaultValue={optionsSortDirection[optionsSortDirection.length - 1]}
        />
      </div>
    </div>
  );
};
