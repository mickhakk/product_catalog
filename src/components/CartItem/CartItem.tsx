import React from 'react';
// import { Product } from '../../types/Product';
import { Link } from 'react-router-dom';
import styles from './CartItem.module.scss';
import { Icon } from '../Icon';
import { SquareButton } from '../SquareButton/SquareButton';

interface Props {
  // key: number
  id: number,
  name: string,
  price: number,
  quantity: number,
  image: string,
  category: string,
  itemId: string,
  deleteProduct: (id: number) => void,
  // changeQuantity: (id: number, type: '-' | '+') => void;
  increaseQuantity: (id: number) => void,
  decreaseQuantity: (id: number) => void,
}

export const CartItem: React.FC<Props> = ({
  id,
  name,
  price,
  quantity,
  image,
  category,
  itemId,
  deleteProduct,
  // changeQuantity,
  increaseQuantity,
  decreaseQuantity,
}) => {
  const fullItemPrice = price * quantity;

  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemFirstRow}>
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label  */}
        <button
          type="button"
          className={styles.cartItemFirstRowDeleteItemButton}
          onClick={() => deleteProduct(id)}
        >
          <Icon type="Close" color="Main" />
        </button>

        <div className={styles.cartItemFirstRowImageWrapper}>
          <img
            src={`${image}`}
            alt={`${name}`}
            className={styles.cartItemFirstRowImageWrapperImage}
          />
        </div>
        <Link
          className={styles.cartItemFirstRowTitle}
          to={`/${category}/${itemId}`}
        >
          {name}
        </Link>
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
                ? <Icon type="Minus" color="Disabled" />
                : <Icon type="Minus" color="Main" />
            }
          </SquareButton>
          <p
            className={styles.cartItemSecondRowQuantityWrapperQuantityText}
          >
            {quantity}
          </p>
          <SquareButton
            handleClick={() => increaseQuantity(id)}
          >
            <Icon type="Plus" color="Main" />
          </SquareButton>
        </div>
        <div
          className={styles.cartItemSecondRowPriceWrapper}
        >
          <p
            className={styles.cartItemSecondRowPriceWrapperPrice}
          >
            {`$${fullItemPrice}`}
          </p>
        </div>
      </div>
    </div>
  );
};
