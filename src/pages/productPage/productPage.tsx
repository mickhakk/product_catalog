/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { About } from './components/About';
import { Photos } from './components/Photos';
import { RecommendedGoods } from './components/RecommendedGoods';
import { TechSpecs } from './components/TechSpecs';
import { VariantsActionsBlock } from './components/VariantsActionsBlock';
import styles from './productPage.module.scss';
import { PhoneData } from './phoneTypes';
import { getProduct } from '../../api/products';

export const ProductPage = () => {
  const [phoneData, setPhoneData] = useState<PhoneData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getProduct().then(setPhoneData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  console.log(phoneData);

  return (
    <div className={styles.product_page}>
      <h1 className={styles.fw}>Product Page</h1>
      <div className={`${styles.hw}`}>
        <Photos />
      </div>

      <div className={`${styles.hw}`}>
        {phoneData && <VariantsActionsBlock phoneData={phoneData} />}
      </div>

      <About />

      <TechSpecs />

      <RecommendedGoods />
    </div>
  );
};
