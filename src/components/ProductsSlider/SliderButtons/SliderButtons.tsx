import { useSwiper } from 'swiper/react';
import styles from './SliderButtons.module.scss';
import { SquareButton } from '../../SquareButton/SquareButton';
import { Icon } from '../../Icon';

export const SliderButtons = () => {
  const swiper = useSwiper();

  return (
    <div className={styles.slider_buttons}>
      <SquareButton handleClick={() => swiper.slidePrev()}>
        <Icon type="ArrowLeft" color="Main" />
      </SquareButton>

      <SquareButton handleClick={() => swiper.slideNext()}>
        <Icon type="ArrowRight" color="Main" />
      </SquareButton>
    </div>
  );
};
