import style from './Product_card.module.scss';
import image from './00.jpg';

export const ProductCard = () => (
  <div className={style.card}>
    <div className={style.card__image_wrapper}>
      <img
        className={style.card__product_image}
        alt="catalog name"
        src={image}
      />
    </div>
    <h3
      className={style.card__product_name}
    >
      Apple iPhone 14 Pro 128GB Silver
      {' '}
      <br />
      {' '}
      (MQ023)
    </h3>

    <div className={style.card__price_wrapper}>
      <p className={style.card__price}>$799</p>
      <p className={style.card__old_price}>$999</p>
      {/* Old price not allways exists, it is optional */}
    </div>

    <div className={style.card__break_line} />

    <div className={style.card__info}>
      <div className={style.card__option_wrapper}>
        <p className={style.card__option}>Screen</p>
        <p className={style.card__option_value}>6.1” OLED</p>
      </div>
      <div className={style.card__option_wrapper}>
        <p className={style.card__option}>Capacity</p>
        <p className={style.card__option_value}>128 GB</p>
      </div>
      <div className={style.card__option_wrapper}>
        <p className={style.card__option}>RAM</p>
        <p className={style.card__option_value}>6 GB</p>
      </div>
    </div>

    <div className={style.card__buttons_wrapper}>
      <button
        type="button"
        className={style.card__button_add}
        // if already in cart add class: style.card__button_add_done
        // change text to 'Added'
      >
        Add to cart
        {/* Added */}
      </button>
      <label className={style.card__checkbox_favorite}>
        <input
          className={style.card__checkbox}
          // selected: style.card__checkbox_selected
          type="checkbox"
        />
      </label>
    </div>

  </div>
);
