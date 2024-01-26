import { useState, useEffect } from 'react';
import { Product } from '../types/Product';

export function useLocalFavoritesStorage(
  key: string,
  startProducts: Product[],
): [Product[], (value: Product[]) => void] {
  function refreshState(): Product[] {
    const productsInStorage = localStorage.getItem(key);

    if (productsInStorage === null) {
      return startProducts;
    }

    try {
      const products = JSON.parse(productsInStorage);

      return products;
    } catch (e) {
      localStorage.removeItem(key);

      return startProducts;
    }
  }

  const [products, setProducts] = useState<Product []>(refreshState);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(products));
    // console.log('products updated in useEffect:', products);
  }, [products, key]);

  const sync = (newProducts: Product []) => {
    setProducts(newProducts);
    localStorage.setItem(key, JSON.stringify(newProducts));
    // console.log('products updated:', refreshState());
  };

  return [products, sync];
}
