// import React from 'react';
import styles from './CartTotalPrice.module.scss';

interface Props {
  products: {
    id: number,
    title: string,
    price: number,
    quantity: number,
    image: string,
  }[]
}

export const CartTotalPrice: React.FC<Props> = ({ products }) => {
  const totalPrice = products.reduce((acc, product) => acc
    + product.price
    * product.quantity, 0);

  return (
    <div className={styles.totalPrice}>
      <div className={styles.totalPriceTextWrapper}>
        <p className={styles.totalPriceTextWrapperValue}>
          {`$${totalPrice}`}
        </p>
        <p className={styles.totalPriceTextWrapperInfo}>
          {`Total for ${products.length} items`}
        </p>
      </div>
      <button
        className={styles.totalPriceButton}
        type="button"
      >
        Checkout
      </button>
    </div>
  );
};
