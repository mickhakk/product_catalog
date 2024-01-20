import {
  FC,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import axios from 'axios';
import { Product } from '../types/Product';

interface ProductsContextType {
  products: Product[],
  favourites: Product[],
  toogleSelectFavorite: (product: Product) => void;
  toogleSelectCart: (product: Product) => void;

}
const ProductsContext = createContext<ProductsContextType>({
  products: [],
  favourites: [],
  toogleSelectFavorite: () => {},
  toogleSelectCart: () => {},
});

export const useContextProvider = () => useContext(ProductsContext);

type Props = {
  children: React.ReactNode;
};

const apiURL = 'https://product-catalog-api-r8lb.onrender.com/products/';

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

    setCartProducts([...cartProducts, product]);
  }, [cartProducts]);

  const toogleSelectFavorite = useCallback((product: Product) => {
    const favouritesIds = favourites.map(({ id }) => id);

    if (favouritesIds.includes(product.id)) {
      setFavoriets(newFavourites => newFavourites
        .filter(({ id }) => id !== product.id));

      return;
    }

    setFavoriets([...favourites, product]);
  }, [favourites]);

  useEffect(() => {
    axios.get(apiURL)
      .then(response => setProducts(response.data));
  }, []);

  const value: ProductsContextType = useMemo(() => ({
    products,
    favourites,
    toogleSelectFavorite,
    toogleSelectCart,
  }), [products, favourites, 
    toogleSelectFavorite, toogleSelectCart]);

  return (
    <ProductsContext.Provider value={value}>
      { children }
    </ProductsContext.Provider>
  );
};
