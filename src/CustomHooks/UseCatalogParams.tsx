import { useLocation, useSearchParams } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import { useContextProvider } from '../context/ProductsContext';

import { SearchParams, getSearchWith } from '../utils/searchHelper';
import { GetParams } from '../types/Product';

export type SelectValue = Pick<GetParams, 'order' | 'direction'>;
export const useCatalogParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') || '';
  const limit = searchParams.get('limit') || 'all';
  const order = searchParams.get('order') || 'price';
  const direction = searchParams.get('direction') || 'DESC';
  const { pathname } = useLocation();
  const catalogPath = pathname.split('/')[1];
  const siblingCount = 1;
  const {
    products,
    setParams,
  } = useContextProvider();
  const productsCount = products?.count;
  const productsCatalog = products?.rows;
  const setSearchWith = useCallback((params:SearchParams) => {
    const search = getSearchWith(searchParams, params);

    setSearchParams(search);
  }, [searchParams, setSearchParams]);

  const handleLimitChange = (event: string,
    value:string) => {
    setSearchWith({ [value]: event || null });
  };

  const handleSelectChange = (value:SelectValue) => {
    setSearchWith({ ...value });
  };

  const checkPageValue = useCallback(() => {
    const totalProductCount = products?.count || 1;
    const limitToNumer = Number(limit) || 1;
    const totalPages = Math.ceil(totalProductCount / limitToNumer);

    if (Number(page) && totalPages < Number(page)) {
      setSearchWith({ page: null });

      return '';
    }

    return Number(page) > 1 ? Number(page) - 1 : 0;
  }, [limit, page, products?.count, setSearchWith]);

  useEffect(() => {
    setParams(newParams => ({
      ...newParams,
      type: catalogPath,
      page: +checkPageValue(),
      limit,
      order,
      direction,
    }));
  }, [checkPageValue, setParams, limit, order, direction, catalogPath]);

  return {
    handleSelectChange,
    siblingCount,
    productsCount,
    productsCatalog,
    limit,
    page,
    searchParams,
    handleLimitChange,
  };
};
