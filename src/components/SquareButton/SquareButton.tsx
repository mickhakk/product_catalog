import { ReactNode } from 'react';
// import { IconType } from '../../types/IconType';
// import { Icon } from '../Icon';
import styles from './SquareButton.module.scss';
import { IconType } from '../../types/IconType';

interface Props {
  handleClick: () => void,
  isDisabled?: boolean,
  disabledIcon?: IconType,
  children: ReactNode,
}

export const SquareButton: React.FC<Props> = ({
  handleClick,
  isDisabled,
  children,
}) => {
  return (
    <button
      className={styles.button}
      type="button"
      onClick={handleClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
