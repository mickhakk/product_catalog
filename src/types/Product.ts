export interface Product {
  id: string;
  namespaceId: string;
  name: string;
  capacityAvailable: string[];
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: string[];
  color: string;
  images: string[];
  description: {
    text: string[];
    title: string;
  }[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string;
  zoom: string;
  cell: string[];
  image: string,
}
export interface GetParams {
  type?: 'phones' | 'tablets' | 'accessories',
  page: number,
  limit: number,
  order: 'year' | 'price',
  direction: 'ASC' | 'DESC'
}

export interface DataFromServer {
  count:number;
  rows:Product[]
}
