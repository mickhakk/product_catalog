import { useEffect, useState } from 'react';

import * as productsService from '../../api/products';
import { BannerSlider, ProductsSlider } from '../../components';
import styles from './homePage.module.scss';
import { Product } from '../../types/Product';
import { CategoriesSection } from '../../components/CategoriesSection';

export const HomePage = () => {
  const [newProducts, setNewProducts] = useState<Product[]>([]);
  const [areNewLoading, setAreNewLoading] = useState(true);

  const [discountProducts, setDiscountProducts] = useState<Product[]>([]);
  const [areDiscountLoading, setAreDiscountLoading] = useState(true);

  useEffect(() => {
    productsService.getNewProducts()
      .then((data => {
        setNewProducts(data.rows);
      }))
      .catch(() => { })
      .finally(() => setAreNewLoading(false));

    productsService.getDiscountProducts()
      .then((data => {
        setDiscountProducts(data);
      }))
      .catch(() => { })
      .finally(() => setAreDiscountLoading(false));
  }, []);

  return (
    <div className={styles.homepage}>
      <div>
        <h1 className={styles.homepage__title}>
          Welcome to Nice Gadgets store!
        </h1>

        <BannerSlider />
      </div>

      <ProductsSlider products={newProducts} areLoading={areNewLoading}>
        Brand new models
      </ProductsSlider>

      <section>
        <CategoriesSection />
      </section>

      <ProductsSlider
        products={discountProducts}
        areLoading={areDiscountLoading}
      >
        Hot prices
      </ProductsSlider>
    </div>
  );
};
