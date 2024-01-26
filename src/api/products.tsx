import axios from 'axios';
import { DataFromServer, GetParams, Product } from '../types/Product';

const apiURL = 'https://product-catalog-api-r8lb.onrender.com/products/';

export const getProducts = async (params:
GetParams): Promise<DataFromServer> => {
  const urlParts = Object.entries(params).map(param => param.join('='))
    .join('&');
  const readyUrls = `${apiURL}?${urlParts}`;
  const products = await axios.get(readyUrls);

  return products.data;
};

export const getProduct = async (): Promise<Product> => {
  const product = await axios.get(
    'https://product-catalog-api-r8lb.onrender.com/'
    + 'products/apple-iphone-7-32gb-black',
  );

  return product.data;
};
