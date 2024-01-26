/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
import { useEffect, useState } from 'react';
import cn from 'classnames';
import styles from './VariantsActionsBlock.module.scss';
import { Button } from '../../../../components/Button';
import { Product } from '../../../../types/Product';
import { useContextProvider } from '../../../../context/ProductsContext';
import { PhoneData } from '../../phoneTypes';
import { allColors } from './allColors';

interface Props {
  phoneData: PhoneData;
}

const ADDED = 'Added';
const NOT_ADDED = 'Add to cart';

const containsProduct = (products: Product[], productId: number): boolean => {
  return products.some((product) => product.id === productId);
};

export const VariantsActionsBlock: React.FC<Props> = ({ phoneData }) => {
  const {
    capacityAvailable,
    colorsAvailable,
    screen,
    resolution,
    processor,
    ram,
  } = phoneData;

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
  } = useContextProvider();

  const findProductById = async (productId: string):
  Promise<Product | undefined> => {
    const productsFilePath = '/api/products.json';

    try {
      const response = await fetch(productsFilePath);
      const productsData = await response.json();

      return productsData
        .find((product: Product) => product.itemId === productId);
    } catch (error) {
      console.error('Error fetching product data:', error);

      return undefined;
    }
  };

  const [productId, setProductId] = useState<number | undefined>(undefined);

  useEffect(() => {
    const fetchProduct = async () => {
      const result = await findProductById(phoneData.id);

      if (result) {
        setProductId(result.id);
      }
    };

    fetchProduct();
  }, [phoneData.id]);

  const handleAddToCart = async () => {
    const productToAdd = await findProductById(phoneData.id);

    if (productToAdd) {
      toogleSelectCart(productToAdd);
    }
  };

  const handleAddToFavorites = async () => {
    const productToAdd = await findProductById(phoneData.id);

    if (productToAdd) {
      toogleSelectFavorite(productToAdd);
    }
  };

  const isInFavorites = productId !== undefined
    && containsProduct(favourites, productId);
  const isInCart = productId !== undefined
    && containsProduct(cartProducts, productId);

  return (
    <>
      <div className={styles.productDetails}>
        <h3 className={styles.id}>{`ID: ${productId}`}</h3>
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
                  disabled={colorKey === phoneData.color}
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
              {phoneData.priceDiscount}
            </span>
            <span className={styles.originalPrice} data-text={`$${phoneData.priceRegular}`}>
              $
              {phoneData.priceRegular}
            </span>
          </div>

          <div className={styles.container_buttons}>
            <Button
              text={isInCart ? ADDED : NOT_ADDED}
              callback={handleAddToCart}
              isActive={isInCart}
            />

            <label className={styles.checkbox__favorite}>
              <input
                onChange={handleAddToFavorites}
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
