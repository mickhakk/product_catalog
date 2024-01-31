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
import { useLocalCartStorage } from '../CustomHooks/useLocalCartStorage';

interface ProductsContextType {
  products: DataFromServer | null,
  favourites: Product[],
  toogleSelectFavorite: (product: Product) => void;
  toogleSelectCart: (product: Product) => void;
  cartProducts: Product[];
  params: GetParams;
  setParams: React.Dispatch<React.SetStateAction<GetParams>>;
  isLoadingLimit: boolean;
  setIsLoadingLimit:(value: boolean) => void;
  isLoadingSort: boolean;
  setIsLoadingSort:(value: boolean) => void;
  isError: boolean;
  setCartProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  removeCartProduct: (id: number) => Promise<void>;
}

export const ProductsContext = createContext<ProductsContextType>({
  products: { count: 0, rows: [] },
  favourites: [],
  toogleSelectFavorite: () => { },
  toogleSelectCart: () => { },
  cartProducts: [],
  params: {
    type: '',
    page: 0,
    limit: '',
    order: '',
    direction: '',
  },
  setParams: () => {},
  isLoadingLimit: false,
  setIsLoadingLimit: () => {},
  isLoadingSort: false,
  setIsLoadingSort: () => {},
  isError: false,
  setCartProducts: () => { },
  removeCartProduct: () => new Promise<void>(() => {}),
});

export const useContextProvider = () => useContext(ProductsContext);

type Props = {
  children: React.ReactNode;
};

const defaultValue:GetParams = {
  type: '',
  page: 0,
  limit: '',
  order: 'price',
  direction: 'DESC',
};

export const ProductsContextProvider: FC<Props> = ({ children }) => {
  const [products, setProducts] = useState<DataFromServer | null>(null);
  const [favourites, setFavourites, toggleFavourites]
    = useLocalFavoritesStorage('favourites', []);
  const [
    cartProducts,
    setCartProducts,
    toogleSelectCart,
    update,
    removeCartProduct,
  ]
    = useLocalCartStorage('cart', []);
  const [params, setParams] = useState<GetParams>(defaultValue);
  const [isLoadingLimit, setIsLoadingLimit] = useState(false);
  const [isLoadingSort, setIsLoadingSort] = useState(false);
  const [isError, setIsError] = useState(false);

  const toogleSelectFavorite = useCallback((product: Product) => {
    toggleFavourites(product);
  }, [favourites]);

  useEffect(() => {
    update(cartProducts);
  }, [cartProducts]);

  useEffect(() => {
    setFavourites(favourites);
  }, [favourites]);

  useEffect(() => {
    setIsError(false);
    getProducts(params)
      .then(data => {
        setProducts(data);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoadingLimit(false);
        setIsLoadingSort(false);
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
    isLoadingLimit,
    setIsLoadingLimit,
    isLoadingSort,
    setIsLoadingSort,
    isError,
    setCartProducts,
    removeCartProduct,
  }), [products, favourites,
    toogleSelectFavorite, toogleSelectCart,
    cartProducts, params, isError,
    isLoadingLimit, setIsLoadingLimit, isLoadingSort, setIsLoadingSort]);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
