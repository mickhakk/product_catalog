export interface Product {
  id: number;
  category: string;
  itemId: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  image: string;
}

export interface ProductDetails {
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
  type?: string,
  page: number,
  limit: string,
  order: string,
  direction: string,
}

export interface DataFromServer {
  count:number;
  rows:Product[]
}
