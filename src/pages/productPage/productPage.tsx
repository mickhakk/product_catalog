import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { About } from './components/About';
import { Photos } from './components/Photos';
import { TechSpecs } from './components/TechSpecs';
import { VariantsActionsBlock } from './components/VariantsActionsBlock';
import styles from './productPage.module.scss';
import { getProduct, getRecommendedProducts } from '../../api/products';
import { DataFromServer, Product, ProductDetails } from '../../types/Product';
import { ProductsSlider } from '../../components';

const getAllProducts = async (): Promise<DataFromServer> => {
  const product = await axios.get(
    'https://product-catalog-api-r8lb.onrender.com/products',
  );

  return product.data;
};

export const ProductPage = () => {
  const { productId } = useParams();
  const [productData, setProductData] = useState<ProductDetails | null>(null);
  const [cardProduct, setCardProduct] = useState<Product | null>(null);

  const [recommended, setRecommended] = useState<Product[]>([]);
  const [areRecommendedLoading, setAreRecommendedLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (productId) {
          const fetchedProductData = await getProduct(productId);

          setProductData(fetchedProductData);
        }

        const allProducts = await getAllProducts();
        const foundProduct = allProducts?.rows
          .find((item) => item.itemId === productId);

        if (foundProduct) {
          setCardProduct(foundProduct);
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching data:', error);
      }
    };

    if (productId) {
      getRecommendedProducts(productId)
        .then((data => {
          setRecommended(data.rows);
        }))
        .catch(() => { })
        .finally(() => setAreRecommendedLoading(false));
    }

    fetchData();
  }, [productId]);

  return (
    <div className={styles.product_page}>
      <h1 className={`${styles.fw} ${styles.product_page_title}`}>
        {productData?.name}
      </h1>

      <div className={`${styles.hw_l} ${styles.photosContainer}`}>
        {productData && (
          <Photos
            photosData={productData?.images}
          />
        )}
      </div>

      <div className={`${styles.hw_r}`}>
        {productData && cardProduct && (
          <VariantsActionsBlock
            productData={productData}
            cardProduct={cardProduct}
          />
        )}
      </div>

      {productData && <About productData={productData} />}

      {productData && <TechSpecs productData={productData} />}

      <div className={styles.recommended}>
        <ProductsSlider
          products={recommended}
          areLoading={areRecommendedLoading}
        >
          You may also like
        </ProductsSlider>
      </div>
    </div>
  );
};
