import { useSwiper } from 'swiper/react';

import styles from './SliderButtons.module.scss';
import { SquareButton } from '../../SquareButton';
import { Icon } from '../../Icon';

export const SliderButtons = () => {
  const swiper = useSwiper();

  const handleNextClick = () => {
    swiper.slideNext();
  };

  const handlePrevClick = () => {
    swiper.slidePrev();
  };

  return (
    <div className={styles.slider_buttons}>
      <SquareButton
        handleClick={handlePrevClick}
        isDisabled={swiper.isBeginning}
      >
        <Icon
          type="ArrowLeft"
          color={swiper.isBeginning ? 'Disabled' : 'Main'}
        />
      </SquareButton>

      <SquareButton
        handleClick={handleNextClick}
        isDisabled={swiper.isEnd}
      >
        <Icon
          type="ArrowRight"
          color={swiper.isEnd ? 'Disabled' : 'Main'}
        />
      </SquareButton>
    </div>
  );
};
