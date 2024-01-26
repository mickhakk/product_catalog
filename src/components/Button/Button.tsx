import cn from 'classnames';
import style from './Button.module.scss';

interface Props {
  text: string;
  callback: () => void;
  isActive?: boolean;
}

export const Button: React.FC<Props> = ({ text, callback, isActive }) => {
  return (
    <button
      type="button"
      className={cn(style.button_add, {
        [style.button_add_done]: isActive,
      })}
      onClick={callback}
    >
      {text}
    </button>
  );
};
