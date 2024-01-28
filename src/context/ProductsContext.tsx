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

interface ProductsContextType {
  products: DataFromServer | null,
  favourites: Product[],
  toogleSelectFavorite: (product: Product) => void;
  toogleSelectCart: (product: Product) => void;
  cartProducts: Product[];
  params: GetParams;
  setParams: React.Dispatch<React.SetStateAction<GetParams>>;

}
const ProductsContext = createContext<ProductsContextType>({
  products: { count: 0, rows: [] },
  favourites: [],
  toogleSelectFavorite: () => {},
  toogleSelectCart: () => {},
  cartProducts: [],
  params: {
    type: '',
    page: 0,
    limit: '',
    order: '',
    direction: '',
  },
  setParams: () => {},
});

export const useContextProvider = () => useContext(ProductsContext);

type Props = {
  children: React.ReactNode;
};

const defaultValue:GetParams = {
  type: '',
  page: 0,
  limit: 'All',
  order: 'price',
  direction: 'DESC',
};

export const ProductsContextProvider: FC<Props> = ({ children }) => {
  const [products, setProducts] = useState<DataFromServer | null>(null);
  const [favourites, setFavoriets] = useState<Product[]>([]);
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const [params, setParams] = useState<GetParams>(defaultValue);

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

  useEffect(() => {
    getProducts(params)
      .then(data => {
        setProducts(data);
      });
  }, [params]);

  const value: ProductsContextType = useMemo(() => ({
    products,
    favourites,
    toogleSelectFavorite,
    toogleSelectCart,
    cartProducts,
    params,
    setParams,
  }), [products, favourites,
    toogleSelectFavorite, toogleSelectCart,
    cartProducts, params]);

  return (
    <ProductsContext.Provider value={value}>
      { children }
    </ProductsContext.Provider>
  );
};
