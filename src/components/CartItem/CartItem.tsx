import React from 'react';
// import { Product } from '../../types/Product';
import styles from './CartItem.module.scss';
import { Icon } from '../Icon';
import { SquareButton } from '../SquareButton/SquareButton';

interface Props {
  id: number,
  title: string,
  price: number,
  quantity: number,
  image: string,
  deleteProduct: (id: number) => void,
  // changeQuantity: (id: number, type: '-' | '+') => void;
  increaseQuantity: (id: number) => void,
  decreaseQuantity: (id: number) => void,
}

export const CartItem: React.FC<Props> = ({
  id,
  title,
  price,
  quantity,
  image,
  deleteProduct,
  // changeQuantity,
  increaseQuantity,
  decreaseQuantity,
}) => {
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemFirstRow}>
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label  */}
        <button
          type="button"
          className={styles.cartItemFirstRowDeleteItemButton}
          onClick={() => deleteProduct(id)}
        >
          <Icon iconType="Close" color="#313237" />
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
          <SquareButton
            handleClick={() => decreaseQuantity(id)}
            isDisabled={quantity <= 1}
          >
            {
              quantity === 1
                ? <Icon iconType="Minus" color="black" />
                : <Icon iconType="Minus" color="black" />
            }
            {/* <Icon type={IconType.minus} /> */}

          </SquareButton>
          <p
            className={styles.cartItemSecondRowQuantityWrapperQuantityText}
          >
            {quantity}
          </p>
          {/* <button
            type="button"
            className={styles.cartItemSecondRowQuantityWrapperButton}
            onClick={() => {
              increaseQuantity(id);
            }}
          >
            +
          </button> */}
          <SquareButton
            handleClick={() => increaseQuantity(id)}
          >
            <Icon iconType="Plus" color="black" />
          </SquareButton>
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
