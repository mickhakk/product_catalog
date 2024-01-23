import { Product } from '../../Types/Product';
import { ProductCard } from '../../components/Product_card/Product_card';

const product: Product = {
  id: 1,
  category: 'phones',
  itemId: 'apple-iphone-11-pro-max-256gb-silver',
  name: 'Apple iPhone 11 Pro Max 256GB Silver',
  fullPrice: 999,
  price: 700,
  screen: '6.1” OLED',
  capacity: '256GB',
  color: 'silver',
  ram: '6GB',
  year: 2020,
  image: 'img/phones/apple-iphone-7/black/00.jpg',
};

export const PhonesCatalog = () => (
  <>
    <h1>Phones Catalog Page</h1>
    <ProductCard product={product} />
  </>
);
