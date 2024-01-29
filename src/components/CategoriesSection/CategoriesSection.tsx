/* eslint-disable no-console */
import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import styles from './CategoriesSection.module.scss';
import { getAllProducts } from '../../api/products';

export const CategoriesSection: React.FC = () => {
  const [phonesLength, setPhonesLength] = useState(0);
  const [tabletsLength, setTabletsLength] = useState(0);
  const [accessoriesLength, setAccessoriesLength] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allProducts = await getAllProducts();

        setPhonesLength(allProducts.rows.reduce((acc, product) => {
          return product.category === 'phones' ? acc + 1 : acc;
        }, 0));

        setTabletsLength(allProducts.rows.reduce((acc, product) => {
          return product.category === 'tablets' ? acc + 1 : acc;
        }, 0));

        setAccessoriesLength(allProducts.rows.reduce((acc, product) => {
          return product.category === 'accessories' ? acc + 1 : acc;
        }, 0));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className={styles.category} id="category">
      <div className={styles.category__container}>
        <h2 className={styles.category__title}>Shop by category</h2>
        <div className={styles.category__products}>
          <article
            className={`${styles.product}`}
          >
            <NavLink to="/phones">
              <div
                className={`${styles.product__photo} ${styles.product__photo__phones}`}
              />
              <h3 className={styles.product__title}>Mobile phones</h3>
              <p className={styles.product__category}>
                {`${phonesLength} models`}
              </p>
            </NavLink>
          </article>

          <article
            className={`${styles.product}`}
          >
            <NavLink to="/tablets">
              <div
                className={`${styles.product__photo} ${styles.product__photo__tablets}`}
              />
              <h3 className={styles.product__title}>Tablets</h3>
              <p className={styles.product__category}>{`${tabletsLength} models`}</p>
            </NavLink>
          </article>

          <article
            className={`${styles.product}`}
          >
            <NavLink to="/accessories">
              <div
                className={`${styles.product__photo} ${styles.product__photo__accessories}`}
              />
              <h3 className={styles.product__title}>Accessories</h3>
              <p className={styles.product__category}>{`${accessoriesLength} models`}</p>
            </NavLink>
          </article>
        </div>
      </div>
    </section>
  );
};
