import React, { useState } from 'react';
import cn from 'classnames';
import style from './ProductCard.module.scss';
import { Product } from '../../types/Product';

interface Props {
  phone: Product,
}

const ADDED = 'Added';
const NOT_ADDED = 'Add to cart';

export const ProductCard: React.FC<Props> = ({ phone }) => {
  const {
    image,
    name,
    fullPrice,
    price,
    screen,
    capacity,
    ram,
  } = phone;

  const hasLowPrice = price && fullPrice;
  const [isSelected, setIsSelected] = useState(false);
  const [isDone, setIsDone] = useState(false);

  return (
    <div className={style.card}>
      <div className={style.card__image_wrapper}>
        <img
          className={style.card__product_image}
          alt="catalog name"
          src={`product_catalog/${image}`}
        />
      </div>
      <h3
        className={style.card__product_name}
      >
        {name}
      </h3>

      <div className={style.card__price_wrapper}>
        {hasLowPrice
          ? (
            <>
              <p className={style.card__price}>{price}</p>
              <p className={style.card__old_price}>{fullPrice}</p>
            </>
          )
          : (
            <p className={style.card__price}>{fullPrice}</p>
          )}
      </div>

      <div className={style.card__break_line} />

      <div className={style.card__info}>
        <div className={style.card__option_wrapper}>
          <p className={style.card__option}>Screen</p>
          <p className={style.card__option_value}>{screen}</p>
        </div>
        <div className={style.card__option_wrapper}>
          <p className={style.card__option}>Capacity</p>
          <p className={style.card__option_value}>{capacity}</p>
        </div>
        <div className={style.card__option_wrapper}>
          <p className={style.card__option}>RAM</p>
          <p className={style.card__option_value}>{ram}</p>
        </div>
      </div>

      <div className={style.card__buttons_wrapper}>
        <button
          type="button"
          onClick={() => setIsDone(!isDone)}
          className={cn(style.card__button_add, {
            [style.card__button_add_done]: isDone,
          })}
        >
          {isDone ? ADDED : NOT_ADDED}
        </button>
        <label className={style.card__checkbox_favorite}>
          <input
            onChange={() => setIsSelected(!isSelected)}
            className={cn(style.card__checkbox, {
              [style.card__checkbox_selected]: isSelected,
            })}
            type="checkbox"
            checked={isSelected}
          />
        </label>
      </div>

    </div>
  );
};
