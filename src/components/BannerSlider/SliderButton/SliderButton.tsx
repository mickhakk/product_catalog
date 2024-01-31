import classNames from 'classnames';
import { Icon } from '../../Icon';
import styles from './SliderButton.module.scss';

interface Props {
  type: 'left' | 'right',
  slideToFunc: () => void,
}

export const SliderButton: React.FC<Props> = ({
  type,
  slideToFunc,
}) => {
  return (
    // eslint-disable-next-line jsx-a11y/control-has-associated-label
    <button
      type="button"
      onClick={() => slideToFunc()}
      className={classNames(styles.button, {
        [styles.buttonRight]: type === 'right',
        [styles.buttonLeft]: type === 'left',
      })}
    >
      {type === 'left' && <Icon type="ArrowLeft" color="Main" />}
      {type === 'right' && <Icon type="ArrowRight" color="Main" />}

    </button>
  );
};
