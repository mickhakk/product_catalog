/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { About } from './components/About';
import { Photos } from './components/Photos';
import { TechSpecs } from './components/TechSpecs';
import { VariantsActionsBlock } from './components/VariantsActionsBlock';
import styles from './productPage.module.scss';
import { getProduct } from '../../api/products';
import { Product } from '../../types/Product';
import { ProductsSlider } from '../../components';

export const ProductPage = () => {
  const [productData, setProductData] = useState<Product | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getProduct().then(setProductData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  console.log(productData);

  return (
    <div className={styles.product_page}>
      <h1 className={styles.fw}>Product Page</h1>
      <div className={`${styles.hw}`}>
        <Photos />
      </div>

      <div className={`${styles.hw}`}>
        {productData && <VariantsActionsBlock productData={productData} />}
      </div>

      {productData && <About productData={productData} />}

      {productData && <TechSpecs productData={productData} />}

      <div className={styles.recommended}>
        <ProductsSlider>
          You may also like
        </ProductsSlider>
      </div>
    </div>
  );
};
