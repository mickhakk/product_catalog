/* eslint-disable react-hooks/exhaustive-deps */
import {
  FC,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { DataFromServer, GetParams, Product } from '../types/Product';
import { getProducts } from '../api/products';
import {
  useLocalFavoritesStorage,
} from '../CustomHooks/useLocalFavoritesStorage';

interface ProductsContextType {
  products: DataFromServer | null,
  favourites: Product[],
  toogleSelectFavorite: (product: Product) => void;
  toogleSelectCart: (product: Product) => void;
  cartProducts: Product[];

}
export const ProductsContext = createContext<ProductsContextType>({
  products: { count: 0, rows: [] },
  favourites: [],
  toogleSelectFavorite: () => {},
  toogleSelectCart: () => {},
  cartProducts: [],
});

export const useContextProvider = () => useContext(ProductsContext);

type Props = {
  children: React.ReactNode;
};

export const ProductsContextProvider: FC<Props> = ({ children }) => {
  const [products, setProducts] = useState<DataFromServer | null>(null);
  const [favourites, setFavourites, toggleFavourites]
    = useLocalFavoritesStorage('favourites', []);
  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  const toogleSelectCart = useCallback((product:Product) => {
    const cartIds = cartProducts.map(({ id }) => id);

    if (cartIds.includes(product.id)) {
      setCartProducts(newCartProducts => newCartProducts
        .filter(({ id }) => id !== product.id));

      return;
    }

    setCartProducts(currentProducts => ([...currentProducts, product]));
  }, [cartProducts]);

  const toogleSelectFavorite = useCallback((product: Product) => {
    toggleFavourites(product);
  }, [favourites]);

  useEffect(() => {
    setFavourites(favourites);
  }, [favourites]);

  const defaultValue:GetParams = useMemo(() => ({
    type: 'phones',
    page: 0,
    limit: 16,
    order: 'price',
    direction: 'DESC',
  }), []);

  useEffect(() => {
    getProducts(defaultValue)
      .then(setProducts);
  }, [defaultValue]);

  const value: ProductsContextType = useMemo(() => ({
    products,
    favourites,
    toogleSelectFavorite,
    toogleSelectCart,
    cartProducts,
  }), [products, favourites,
    toogleSelectFavorite, toogleSelectCart, cartProducts]);

  return (
    <ProductsContext.Provider value={value}>
      { children }
    </ProductsContext.Provider>
  );
};
