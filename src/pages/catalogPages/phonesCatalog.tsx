import { Product } from '../../types/Product';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { Pagination } from '../../components/Pagination/Pagination';

const products: Product [] = [{
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
},
{
  id: 2,
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
},
{
  id: 3,
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
},
{
  id: 4,
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
},
];

// console.log(`productss: ${productss}`);

export const PhonesCatalog = () => (
  <>
    <h1>Phones Catalog Page</h1>
    {products.map(product => (
      <ProductCard product={product} />
    ))}

    <Pagination
      totalCount={200}
      pageSize={16}
      siblingCount={1}
    />
  </>
);
