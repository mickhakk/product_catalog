import { useSwiper } from 'swiper/react';
import { useState } from 'react';

import styles from './SliderButtons.module.scss';
import { SquareButton } from '../../SquareButton';
import { Icon } from '../../Icon';

export const SliderButtons = () => {
  const swiper = useSwiper();
  /* next useState is to cause rerender for buttons when they are clicked,
  to aply correct disabled styles if needed, this looks ugly but
  I don't now how else to do it */
  const [, setUpdate] = useState({});

  const handleNextClick = () => {
    swiper.slideNext();
    setUpdate({});
  };

  const handlePrevClick = () => {
    swiper.slidePrev();
    setUpdate({});
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
