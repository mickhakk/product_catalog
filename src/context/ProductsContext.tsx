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
  isLoadingLimit: boolean;
  setIsLoadingLimit:(value: boolean) => void;
  isLoadingSort: boolean;
  setIsLoadingSort:(value: boolean) => void;
  isError: boolean;
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
  isLoadingLimit: false,
  setIsLoadingLimit: () => {},
  isLoadingSort: false,
  setIsLoadingSort: () => {},
  isError: false,
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
  const [isLoadingLimit, setIsLoadingLimit] = useState(false);
  const [isLoadingSort, setIsLoadingSort] = useState(false);
  const [isError, setIsError] = useState(false);

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
      })
      .catch((error) => {
        console.log(error);
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
  }), [products, favourites,
    toogleSelectFavorite, toogleSelectCart,
    cartProducts, params, isError,
    isLoadingLimit, setIsLoadingLimit, isLoadingSort, setIsLoadingSort]);

  return (
    <ProductsContext.Provider value={value}>
      { children }
    </ProductsContext.Provider>
  );
};
