import cn from 'classnames';
import styles from './Button.module.scss';

interface Props {
  text: string;
  onClick: () => void;
  height?: number;
  width?: number;
  isSelected?: boolean;
  isDisabled?: boolean;
}

export const Button: React.FC<Props> = (props) => {
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
        styles.button,
        { [styles['button--selected']]: isSelected },
      )}
      onClick={onClick}
      style={{ height: `${height}px`, width: width ? `${width}px` : '100%' }}
    >
      {text}
    </button>
  );
};
