import React from 'react';
// import { Product } from '../../types/Product';
import styles from './CartItem.module.scss';
import { Icon } from '../Icon';
import { IconType } from '../../types/IconType';

interface Props {
  id: number,
  title: string,
  price: number,
  quantity: number,
  image: string,
  deleteProduct: (id: number) => void,
  changeQuantity: (id: number, type: '-' | '+') => void;
}

export const CartItem: React.FC<Props> = ({
  id,
  title,
  price,
  quantity,
  image,
  deleteProduct,
  changeQuantity,
}) => {
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemFirstRow}>
        <button
          type="button"
          className={styles.cartItemFirstRowDeleteItemButton}
          onClick={() => deleteProduct(id)}
          aria-label="delete product"
        >
          <Icon type={IconType.close} />
        </button>
        <img
          src={`${image}`}
          alt={`${title}`}
          className={styles.cartItemFirstRowImage}
        />
        <p className={styles.cartItemFirstRowTitle}>
          {title}
        </p>
      </div>
      <div className={styles.cartItemSecondRow}>
        <div
          className={styles.cartItemSecondRowQuantityWrapper}
        >
          <button
            type="button"
            className={styles.cartItemSecondRowQuantityWrapperButton}
            disabled={quantity < 5}
            onClick={() => {
              changeQuantity(id, '-');
            }}
          >
            -
          </button>
          <p
            className={styles.cartItemSecondRowQuantityWrapperQuantityText}
          >
            {quantity}
          </p>
          <button
            type="button"
            className={styles.cartItemSecondRowQuantityWrapperButton}
            onClick={() => {
              changeQuantity(id, '+');
            }}
          >
            +
          </button>
        </div>
        <div
          className={styles.cartItemSecondRowPriceWrapper}
        >
          <p
            className={styles.cartItemSecondRowPriceWrapperPrice}
          >
            {`$${price * quantity}`}
          </p>
        </div>
      </div>
    </div>
  );
};
