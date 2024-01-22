import axios from 'axios';
import { GetParams } from '../types/Product';

const apiURL = 'https://product-catalog-api-r8lb.onrender.com/products/';

export const getProducts = async (params: GetParams) => {
  const arrayOfParams = Object.entries(params);
  const direction = arrayOfParams.slice(-1).flat().slice(1).join('');
  const allParams = arrayOfParams.slice(0, -1).map(param => param.join('='))
    .join('&');
  const preperedParams = `${allParams},${direction}`;
  const readyUrls = `${apiURL}?${preperedParams}`;
  const products = await axios.get(readyUrls);

  return products.data;
};
