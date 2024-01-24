import { BannerSlider, ProductsSlider } from '../../components';
import styles from './homePage.module.scss';

export const HomePage = () => (
  <div className={styles.homepage}>
    <div>
      <h1 className={styles.homepage__title}>
        Welcome to Nice Gadgets store!
      </h1>

      <BannerSlider />
    </div>

    <ProductsSlider>
      Brand new models
    </ProductsSlider>

    <section>
      Shop by category
    </section>

    <ProductsSlider>
      Hot prices
    </ProductsSlider>
  </div>
);
