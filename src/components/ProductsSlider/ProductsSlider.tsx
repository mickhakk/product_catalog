import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import './swiper.scss';
import styles from './ProductsSlider.module.scss';

import { ProductCard } from '../ProductCard/ProductCard';
import { SliderButtons } from './SliderButtons/SliderButtons';
import type { Product } from '../../types/Product';

interface Props {
  children: string;
}

const product: Product = {
  id: 1,
  category: 'phones',
  itemId: 'apple-iphone-11-pro-max-256gb-silver',
  name: 'Apple iPhone 11 Pro Max 256GB Silver',
  fullPrice: 999,
  price: 700,
  screen: '6.1” OLED',
  capacity: '256GB',
  color: 'silver',
  ram: '6GB',
  year: 2020,
  image: 'img/phones/apple-iphone-7/black/00.jpg',
};

export const ProductsSlider: React.FC<Props> = ({ children }) => {
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

        <SwiperSlide>
          <ProductCard product={product} simpleHoverEffect />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard product={product} simpleHoverEffect />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard product={product} simpleHoverEffect />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard product={product} simpleHoverEffect />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard product={product} simpleHoverEffect />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard product={product} simpleHoverEffect />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard product={product} simpleHoverEffect />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard product={product} simpleHoverEffect />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard product={product} simpleHoverEffect />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
