export interface Product {
  id: number,
  category: string,
  itemId: string,
  name: string,
  fullPrice: number,
  price: number,
  screen: string,
  capacity: string,
  color: string,
  ram: string,
  year: number,
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
