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
