import React from 'react';
import cn from 'classnames';
import styles from './PrimaryButton.module.scss';

interface Props {
  text: string;
  onClick: () => void;
  height?: number;
  width?: number;
  isSelected?: boolean;
  isDisabled?: boolean;
}

export const PrimaryButton: React.FC<Props> = (props) => {
  const {
    text,
    onClick,
    height = 40,
    width,
    isSelected,
    isDisabled,
  } = props;

  return (
    <button
      type="button"
      disabled={isDisabled}
      className={cn(
        styles.primary_button,
        { [styles['primary_button--selected']]: isSelected },
      )}
      onClick={onClick}
      style={{ height: `${height}px`, width: width ? `${width}px` : '100%' }}
    >
      {text}
    </button>
  );
};
