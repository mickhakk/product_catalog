import axios from 'axios';
import { DataFromServer, GetParams } from '../types/asdasd';

const apiURL = 'https://product-catalog-api-r8lb.onrender.com/products/';

export const getProducts = async (params:
GetParams): Promise<DataFromServer> => {
  const urlParts = Object.entries(params).map(param => param.join('='))
    .join('&');
  const readyUrls = `${apiURL}?${urlParts}`;
  const products = await axios.get(readyUrls);

  return products.data;
};
