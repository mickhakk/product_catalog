import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import './swiper.scss';
import styles from './ProductsSlider.module.scss';

import { ProductCard } from '../ProductCard';
import { SliderButtons } from './SliderButtons';
import type { Product } from '../../types/Product';
import { LoadingCard } from '../LoadingCard';

interface Props {
  children: string;
  products: Product[];
  areLoading: boolean;
}

export const ProductsSlider: React.FC<Props> = (props) => {
  const { children, products, areLoading } = props;

  return (
    <section className={styles.products_slider}>
      <div className={styles.products_slider__top}>
        <h2 className={styles.products_slider__title}>
          {children}
        </h2>
      </div>

      <Swiper
        speed={1000}
        spaceBetween={16}
        slidesPerView="auto"
        breakpoints={{
          320: { slidesPerGroup: 1 },
          640: { slidesPerGroup: 2 },
          1200: { slidesPerGroup: 4 },
        }}
      >
        <SliderButtons />

        {areLoading
          ? (
            <>
              <SwiperSlide>
                <LoadingCard />
              </SwiperSlide>

              <SwiperSlide>
                <LoadingCard />
              </SwiperSlide>

              <SwiperSlide>
                <LoadingCard />
              </SwiperSlide>

              <SwiperSlide>
                <LoadingCard />
              </SwiperSlide>

              <SwiperSlide>
                <LoadingCard />
              </SwiperSlide>
            </>
          )
          : products.map(product => (
            <SwiperSlide key={product.itemId}>
              <ProductCard product={product} simpleHoverEffect />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};
