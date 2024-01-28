import { GroupBase, OptionProps, StylesConfig } from 'react-select';

export interface Option {
  value:{ order:string, direction:string },
  label:string,
}

export interface OptionLimit {
  value:string,
  label:string,
}
export type CombinedOption = Option | OptionLimit;

const getBackgroundColor = (state: OptionProps<CombinedOption, boolean>) => {
  if (state.isFocused && !state.isSelected) {
    return '#FAFBFC';
  }

  if (state.isSelected) {
    return '#313237';
  }

  return '#FFFFFF';
};

const getColor = (state:OptionProps<CombinedOption, boolean>) => {
  if (state.isSelected) {
    return '#ffffff';
  }

  if (state.isFocused) {
    return '#313237';
  }

  return '#89939A';
};

export const customStyles:StylesConfig<CombinedOption,
false, GroupBase<CombinedOption>> = {
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
