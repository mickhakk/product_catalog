/* eslint-disable react/button-has-type */
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import cn from 'classnames';
import styles from './VariantsActionsBlock.module.scss';
import { Button } from '../../../../components/Button';
import { Product, ProductDetails } from '../../../../types/Product';
import { useContextProvider } from '../../../../context/ProductsContext';
import { allColors } from './allColors';

interface Props {
  productData: ProductDetails;
  cardProduct: Product;
}

const ADDED = 'Added';
const NOT_ADDED = 'Add to cart';

const containsProduct
  = (products: Product[], productId: string): boolean => {
    return products.some((product) => product.itemId === productId);
  };

export const VariantsActionsBlock: React.FC<Props> = ({
  productData,
  cardProduct,
}) => {
  const {
    capacityAvailable,
    capacity,
    colorsAvailable,
    screen,
    resolution,
    processor,
    ram,
    color,
  } = productData;

  const specifications = {
    screen,
    resolution,
    processor,
    ram,
  };
  const [selectedColor, setSelectedColor] = useState<string>(color);
  const capacities = Object.values(capacityAvailable);

  const [currentCapacity, setCapacity] = useState<string>(capacity);
  const location = useLocation();

  const handleColorClick = (c: string) => {
    setSelectedColor(c);
    const parts = location.pathname.split('-');

    parts[parts.length - 1] = c;
    const newUrl = `#${parts.join('-')}`;

    window.location.href = newUrl;
  };

  const handleCapacityClick = (cap: string) => {
    setCapacity(cap);
    const parts = location.pathname.split('-');

    parts[parts.length - 2] = cap.toLowerCase();
    const newUrl = `#${parts.join('-')}`;

    window.location.href = newUrl;
  };

  const {
    toogleSelectCart,
    toogleSelectFavorite,
    favourites,
    cartProducts,
  } = useContextProvider();

  const isInFavorites = cardProduct
    && containsProduct(favourites, cardProduct.itemId);
  const isInCart = cardProduct
    && containsProduct(cartProducts, cardProduct.itemId);

  if (!cardProduct) {
    return <div>No product available</div>;
  }

  return (
    <>
      <div className={styles.productDetails}>
        <h3 className={styles.id}>{`ID: ${productData.name}`}</h3>
        <h3 className={styles.headColors}>Available colors</h3>
        <section className={styles.colors}>
          <div className={styles.colorOptions}>
            {colorsAvailable.map((colorKey) => {
              const isColorValid = colorKey in allColors;

              const buttonColor = isColorValid
                ? allColors[colorKey]
                : '#fff';

              return (
                <button
                  key={colorKey}
                  className={`${styles.button} ${
                    selectedColor === colorKey ? styles.selected : ''
                  }`}
                  style={{ backgroundColor: buttonColor }}
                  aria-label={`${
                    colorKey.charAt(0).toUpperCase() + colorKey.slice(1)
                  } color`}
                  onClick={() => handleColorClick(colorKey)}
                  disabled={colorKey === productData.color}
                >
                  <span className={styles.visuallyHidden}>
                    {`${
                      colorKey.charAt(0).toUpperCase() + colorKey.slice(1)
                    } color`}
                  </span>
                </button>
              );
            })}
          </div>
        </section>
        <section className={styles.capacity}>
          <h3 className={styles.headCapacity}>Select capacity</h3>
          {capacities.map((cap) => (
            <button
              className={`${styles.capacityButton} ${
                currentCapacity === cap ? styles.selectedCapacity : ''
              }`}
              key={cap}
              onClick={() => handleCapacityClick(cap)}
            >
              {cap}
            </button>
          ))}
        </section>

        <div>
          <div className={styles.price}>
            <span className={styles.salePrice}>
              $
              {productData.priceDiscount}
            </span>
            <span className={styles.originalPrice} data-text={`$${productData.priceRegular}`}>
              $
              {productData.priceRegular}
            </span>
          </div>

          <div className={styles.container_buttons}>
            <Button
              text={isInCart ? ADDED : NOT_ADDED}
              onClick={() => toogleSelectCart(cardProduct)}
              isSelected={isInCart}
              height={48}
            />

            <label className={styles.checkbox__favorite}>
              <input
                onChange={() => toogleSelectFavorite(cardProduct)}
                className={cn(styles.checkbox, {
                  [styles.checkbox__selected]: isInFavorites,
                })}
                type="checkbox"
                checked={isInFavorites}
              />
            </label>
          </div>
        </div>

        <section className={styles.specs}>
          {Object.entries(specifications).map(([nameSpec, value]) => (
            <div key={nameSpec} className={styles.spec}>
              <span className={styles.specName}>{nameSpec}</span>
              <span className={styles.specValue}>{value}</span>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};
