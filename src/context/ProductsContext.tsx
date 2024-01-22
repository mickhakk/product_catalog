import {
  FC,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { GetParams, Product } from '../types/Product';
import { getProducts } from '../api/products';

interface ProductsContextType {
  products: Product[],
  favourites: Product[],
  toogleSelectFavorite: (product: Product) => void;
  toogleSelectCart: (product: Product) => void;
  cartProducts: Product[];

}
const ProductsContext = createContext<ProductsContextType>({
  products: [],
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
  const [products, setProducts] = useState<Product[]>([]);
  const [favourites, setFavoriets] = useState<Product[]>([]);
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
    const favouritesIds = favourites.map(({ id }) => id);

    if (favouritesIds.includes(product.id)) {
      setFavoriets(newFavourites => newFavourites
        .filter(({ id }) => id !== product.id));

      return;
    }

    setFavoriets(currentProducts => ([...currentProducts, product]));
  }, [favourites]);

  const defaultValue:GetParams = useMemo(() => ({
    type: 'tablets',
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
