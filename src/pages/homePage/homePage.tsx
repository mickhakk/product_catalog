import styles from './homePage.module.scss';

export const HomePage = () => (
  <>
    <h1 className={styles.mainTitle}>
      Welcome to Nice Gadgets store!
    </h1>
    <div className={styles.carouselPlaceholder}>
      Hero Carousel
    </div>
    <h2 className={styles.secondaryTitle}>
      Brand new models
    </h2>
    <div className={styles.productCard}>
      productCard
    </div>
  </>
);
