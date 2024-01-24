import React from 'react';
import styles from './ProductsSlider.module.scss';

interface Props {
  children: string;
}

export const ProductsSlider: React.FC<Props> = ({ children }) => {
  return (
    <section className={styles.products_slider}>
      <div className={styles.products_slider__top}>
        <h2 className={styles.products_slider__title}>
          {children}
        </h2>

        <div className={styles.products_slider__buttons}>
          buttons
        </div>
      </div>

      <div className={styles.products_slider__products}>
        Products
      </div>
    </section>
  );
};
