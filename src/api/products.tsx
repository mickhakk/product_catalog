import axios from 'axios';
import {
  DataFromServer,
  GetParams,
  Product,
  ProductDetails,
} from '../types/Product';

const apiURL = 'https://product-catalog-api-r8lb.onrender.com/products/';

export const getProducts = async (params:
GetParams): Promise<DataFromServer> => {
  const urlParts = Object.entries(params).map(param => param.join('='))
    .join('&');
  const readyUrls = `${apiURL}?${urlParts}`;
  const products = await axios.get(readyUrls);

  return products.data;
};

export const getProduct
  = async (productId: string): Promise<ProductDetails> => {
    const product = await axios.get(
      `https://product-catalog-api-r8lb.onrender.com/products/${
        productId}`,
    );

    return product.data;
  };

export const getNewProducts = async (): Promise<DataFromServer> => {
  const products = await axios.get(`${apiURL}new`);

  return products.data;
};

export const getDiscountProducts = async (): Promise<Product[]> => {
  const products = await axios.get(`${apiURL}discount`);

  return products.data;
};

export const getAllProducts = async (): Promise<DataFromServer> => {
  const product = await axios.get(
    'https://product-catalog-api-r8lb.onrender.com/products',
  );

  return product.data;
};
