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
  params: GetParams;
  setParams: React.Dispatch<React.SetStateAction<GetParams>>;
  isLoadingLimit:boolean;
  setIsLoadingLimit:(value: boolean) => void;
  isLoadingSort:boolean;
  setIsLoadingSort:(value: boolean) => void;
  setCartProducts: React.Dispatch<React.SetStateAction<Product[]>>;

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
  setCartProducts: () => { },
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
  const [favourites, setFavourites, toggleFavourites]
    = useLocalFavoritesStorage('favourites', []);
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const [params, setParams] = useState<GetParams>(defaultValue);
  const [isLoadingLimit, setIsLoadingLimit] = useState(false);
  const [isLoadingSort, setIsLoadingSort] = useState(false);

  const toogleSelectCart = useCallback((product: Product) => {
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

  useEffect(() => {
    getProducts(params)
      .then(data => {
        setProducts(data);
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
    setCartProducts,
  }), [products, favourites,
    toogleSelectFavorite, toogleSelectCart,
    cartProducts, params,
    isLoadingLimit, setIsLoadingLimit, isLoadingSort, setIsLoadingSort]);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
