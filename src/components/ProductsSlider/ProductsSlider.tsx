import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import styles from './ProductsSlider.module.scss';

import { ProductCard } from '../ProductCard';
import { SliderButtons } from './SliderButtons';
import { LoadingCard } from '../LoadingCard';
import type { Product } from '../../types/Product';

interface Props {
  children: string;
  products: Product[];
  areLoading: boolean;
}

export const ProductsSlider: React.FC<Props> = React.memo(
  (props) => {
    const { children, products, areLoading } = props;
    /* next useState is to cause rerender for when slides are changed,
      to aply correct disabled styles for buttons, this looks ugly but
      I don't now how else to do it */
    const [, setUpdate] = useState({});

    return (
      <section className={styles.products_slider}>
        <div className={styles.products_slider__top}>
          <h2 className={styles.products_slider__title}>
            {children}
          </h2>
        </div>

        <Swiper
          className={styles.swiper}
          speed={1000}
          spaceBetween={16}
          slidesPerView="auto"
          breakpoints={{
            320: { slidesPerGroup: 1 },
            640: { slidesPerGroup: 2 },
            1200: { slidesPerGroup: 4 },
          }}
          onSlideChange={() => setUpdate({})}
        >
          <SliderButtons />

          {areLoading
            ? (
              <>
                <SwiperSlide className={styles.swiper_slide}>
                  <LoadingCard />
                </SwiperSlide>

                <SwiperSlide className={styles.swiper_slide}>
                  <LoadingCard />
                </SwiperSlide>

                <SwiperSlide className={styles.swiper_slide}>
                  <LoadingCard />
                </SwiperSlide>

                <SwiperSlide className={styles.swiper_slide}>
                  <LoadingCard />
                </SwiperSlide>

                <SwiperSlide className={styles.swiper_slide}>
                  <LoadingCard />
                </SwiperSlide>
              </>
            )
            : products.map(product => (
              <SwiperSlide key={product.itemId} className={styles.swiper_slide}>
                <ProductCard product={product} simpleHoverEffect />
              </SwiperSlide>
            ))}
        </Swiper>
      </section>
    );
  },
);
