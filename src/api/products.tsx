import axios from 'axios';
import { GetParams } from '../types/Product';

const apiURL = 'https://product-catalog-api-r8lb.onrender.com/products/';

export const getProducts = async (params: GetParams) => {
  const preaperedParams = Object.entries(params)
    .map(param => param.join('=')).join('&');
  const readyUrls = `${apiURL}?${preaperedParams}`;
  const products = await axios.get(readyUrls);

  return products.data;
};
