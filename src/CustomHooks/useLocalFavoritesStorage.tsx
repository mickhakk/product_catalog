import { useState } from 'react';
import { Product } from '../types/Product';

export function useLocalFavoritesStorage(
  key: string,
  startProducts: Product[],
): [Product[],
    (newProducts: Product[]) => void,
    (product: Product) => Promise<void>] {
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

  const toggleFavourites = async (product: Product) => {
    const favouritesIds = products.map(({ id }) => id);

    if (favouritesIds.includes(product.id)) {
      await setProducts((newFavourites) => (
        newFavourites.filter(({ id }) => id !== product.id)
      ));

      localStorage.setItem(key, JSON.stringify(products));

      return;
    }

    await setProducts((currentProducts) => [...currentProducts, product]);

    localStorage.setItem(key, JSON.stringify(products));
  };

  return [products, update, toggleFavourites];
}
