import { useState } from 'react';
import { Product } from '../types/Product';

export function useLocalCartStorage(
  key: string,
  startProducts: Product[],
): [
    Product[],
    React.Dispatch<React.SetStateAction<Product[]>>,
    (product: Product) => Promise<void>,
    (newProducts: Product[]) => Promise<void>,
    (id: number) => Promise<void>,
  ] {
  const [products, setProducts] = useState<Product[]>(() => {
    const productsInStorage = localStorage.getItem(key);

    if (!productsInStorage) {
      return startProducts;
    }

    try {
      const currentProducts = JSON.parse(productsInStorage);

      return currentProducts;
    } catch {
      localStorage.removeItem(key);

      return startProducts;
    }
  });

  const update = async (newProducts: Product[]) => {
    await setProducts(newProducts);

    localStorage.setItem(key, JSON.stringify(products));
  };

  const toogleSelectCart = async (product: Product) => {
    const cartIds = products.map(({ id }) => id);

    if (cartIds.includes(product.id)) {
      await setProducts((newCartProducts) => (
        newCartProducts.filter(({ id }) => id !== product.id)
      ));

      localStorage.setItem(key, JSON.stringify(products));

      return;
    }

    await setProducts((currentProducts) => [...currentProducts, product]);

    localStorage.setItem(key, JSON.stringify(products));
  };

  const deleteProduct = async (id: number) => {
    await setProducts(prevProducts => prevProducts
      .filter(product => product.id !== id));

    localStorage.setItem(key, JSON.stringify(products));
  };

  return [products, setProducts, toogleSelectCart, update, deleteProduct];
}
