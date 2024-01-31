import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { useEffect, useRef, useState } from 'react';
import { SliderButton } from './SliderButton/SliderButton';
import { BannerContent } from './BannerContent/BannerContent';
import { Device } from '../../types/Device';

import styles from './BannerSlider.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import './swiper.scss';

export const BannerSlider = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const [deviceType, setDeviceType] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < Device.Tablet) {
        setDeviceType(Device.Mobile);
      }

      if (window.innerWidth >= Device.Tablet
        && window.innerWidth < Device.Desktop) {
        setDeviceType(Device.Tablet);
      }

      if (window.innerWidth >= Device.Desktop) {
        setDeviceType(Device.Desktop);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const goToNextSlide = () => {
    swiperRef.current?.slideNext();
  };

  const goToPrevSlide = () => {
    swiperRef.current?.slidePrev();
  };

  return (
    <section className={styles.banner_container}>

      {deviceType >= Device.Tablet
        && <SliderButton type="left" slideToFunc={goToPrevSlide} />}

      <Swiper
        className="swiper1"
        modules={[Pagination, Autoplay]}
        pagination={{
          el: `.${styles.pagination}`,
          clickable: true,
          bulletClass: styles.pagination__bullet,
          bulletActiveClass: styles['pagination__bullet--active'],
        }}
        slidesPerView={1}
        onSwiper={(swiper: SwiperClass) => {
          swiperRef.current = swiper;
        }}
        autoplay={{
          delay: 4000,
        }}
        loop
      >

        <SwiperSlide>
          <BannerContent
            imageMobile="img/banners/banner-mobile.jpg"
            imageTablet="img/banners/banner-tablet.jpg"
            imageDesktop="img/banners/banner-desktop.jpg"
            link="/phones/apple-iphone-14-256gb-purple"
            description="New iPhone 14 Pro"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerContent
            // eslint-disable-next-line max-len
            imageMobile="https://dummyimage.com/400x400/0073ff/ffffff&text=Slide+2"
            // eslint-disable-next-line max-len
            imageTablet="https://dummyimage.com/1040x400/0073ff/ffffff&text=Slide+2"
            // eslint-disable-next-line max-len
            imageDesktop="https://dummyimage.com/1040x400/0073ff/ffffff&text=Slide+2"
            link="/phones/apple-iphone-14-256gb-purple"
            description="Slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerContent
            // eslint-disable-next-line max-len
            imageMobile="https://dummyimage.com/400x400/62ff00/ffffff&text=Slide+3"
            // eslint-disable-next-line max-len
            imageTablet="https://dummyimage.com/1040x400/62ff00/ffffff&text=Slide+3"
            // eslint-disable-next-line max-len
            imageDesktop="https://dummyimage.com/1040x400/62ff00/ffffff&text=Slide+3"
            link="/phones/apple-iphone-14-256gb-purple"
            description="Slide 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerContent
            // eslint-disable-next-line max-len
            imageMobile="https://dummyimage.com/400x400/ffaa00/0073ff&text=Slide+4"
            // eslint-disable-next-line max-len
            imageTablet="https://dummyimage.com/1040x400/ffaa00/ffffff&text=Slide+4"
            // eslint-disable-next-line max-len
            imageDesktop="https://dummyimage.com/1040x400/ffaa00/ffffff&text=Slide+4"
            link="/phones/apple-iphone-14-256gb-purple"
            description="Slide 4"
          />
        </SwiperSlide>
      </Swiper>

      {deviceType >= Device.Tablet
        && <SliderButton type="right" slideToFunc={goToNextSlide} />}
      <div className={styles.pagination} />
    </section>
  );
};
