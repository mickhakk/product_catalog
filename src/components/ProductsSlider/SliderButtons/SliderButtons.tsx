import { useSwiper } from 'swiper/react';
import styles from './SliderButtons.module.scss';

export const SliderButtons = () => {
  const swiper = useSwiper();

  return (
    <div className={styles.slider_buttons}>
      <button
        type="button"
        onClick={() => swiper.slidePrev()}
        className={styles.slider_buttons__button}
      >
        {'<'}
      </button>
      <button
        type="button"
        onClick={() => swiper.slideNext()}
        className={styles.slider_buttons__button}
      >
        {'>'}
      </button>
    </div>
  );
};
