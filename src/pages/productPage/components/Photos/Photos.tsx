/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import SwiperClass from 'swiper';

import swiperStyles from './Photos.module.scss';

interface Props {
  photosData: string[];
}

export const Photos: React.FC<Props> = ({ photosData }) => {
  const [activeTumb, setActiveThumb] = useState<SwiperClass | null>(null);
  const [swiperDirection, setSwiperDirection]
    = useState<'horizontal' | 'vertical'>('horizontal');
  const [spaceB, setSpaceb] = useState<number>(8);

  useEffect(() => {
    const checkWindowSize = () => {
      setSwiperDirection(window.innerWidth < 640 ? 'horizontal' : 'vertical');
      setSpaceb(window.innerWidth < 640 ? 8 : 16);
    };

    checkWindowSize();
    window.addEventListener('resize', checkWindowSize);

    return () => window.removeEventListener('resize', checkWindowSize);
  }, []);

  return (
    <div className={swiperStyles.photosSwiperContainer}>
      <div className={swiperStyles.photosMainGrid}>
        <Swiper
          loop
          spaceBetween={0}
          modules={[Navigation, Thumbs]}
          grabCursor
          thumbs={{ swiper: activeTumb }}
          className={swiperStyles.photosMainProductsSlider}
          data-swiper-id="swiper-1"
        >
          {photosData.map((item) => (
            <SwiperSlide
              key={item}
              className={swiperStyles.photosSwiperSlide}
            >
              <img
                src={item}
                alt={`Slider - ${item}`}
                className={swiperStyles.photosSwiperImage}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={swiperStyles.photosGaleryGrid}>
        <Swiper
          onSwiper={(swiper: SwiperClass) => setActiveThumb(swiper)}
          loop
          direction={swiperDirection}
          spaceBetween={spaceB}
          slidesPerView={5}
          modules={[Navigation, Thumbs]}
          className={swiperStyles.photosGaleryProducts}
          data-swiper-id="swiper-2"
        >
          {photosData.map((item) => (
            <SwiperSlide
              key={item}
              className={swiperStyles.photosGalerySlide}
            >
              <div className={swiperStyles.photosGaleryProductsWrapper}>
                <img
                  src={item}
                  alt={`Slider - ${item}`}
                  className={swiperStyles.photosGaleryImage}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
