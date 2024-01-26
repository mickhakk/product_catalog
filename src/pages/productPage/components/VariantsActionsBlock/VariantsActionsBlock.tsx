/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
import { useState } from 'react';
import cn from 'classnames';
import styles from './VariantsActionsBlock.module.scss';
import { Button } from '../../../../components/Button';
import { Product, ProductDetails } from '../../../../types/Product';
import { useContextProvider } from '../../../../context/ProductsContext';
import { allColors } from './allColors';

interface Props {
  productData: ProductDetails;
}

const ADDED = 'Added';
const NOT_ADDED = 'Add to cart';

const containsProduct
  = (products: Product[], productId: string): boolean => {
    return products.some((product) => product.itemId === productId);
  };

export const VariantsActionsBlock: React.FC<Props> = ({ productData }) => {
  const {
    capacityAvailable,
    colorsAvailable,
    screen,
    resolution,
    processor,
    ram,
    namespaceId,
    id,
  } = productData;

  const specifications = {
    screen,
    resolution,
    processor,
    ram,
  };

  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const capacities = Object.values(capacityAvailable);

  const [currentCapacity, setCapacity] = useState<string>(capacityAvailable[0]);

  const handleColorClick = (c: string) => {
    setSelectedColor(c);
  };

  const {
    toogleSelectCart,
    toogleSelectFavorite,
    favourites,
    cartProducts,
    products,
  } = useContextProvider();

  const cardProduct = products?.rows.find((item) => item.itemId === id);

  const [productId] = useState<string | undefined>(id);

  const isInFavorites = productId !== undefined
    && containsProduct(favourites, productId);
  const isInCart = productId !== undefined
    && containsProduct(cartProducts, productId);

  return (
    <>
      <div className={styles.productDetails}>
        <h3 className={styles.id}>{`ID: ${namespaceId}`}</h3>
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
              onClick={() => setCapacity(cap)}
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
              callback={() => toogleSelectCart(cardProduct as Product)}
              isActive={isInCart}
            />

            <label className={styles.checkbox__favorite}>
              <input
                onChange={() => toogleSelectFavorite(cardProduct as Product)}
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
