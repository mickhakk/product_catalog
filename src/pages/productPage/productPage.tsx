import { About } from './components/About';
import { Photos } from './components/Photos';
import { RecommendedGoods } from './components/RecommendedGoods';
import { TechSpecs } from './components/TechSpecs';
import { VariantsActionsBlock } from './components/VariantsActionsBlock';
import styles from './productPage.module.scss';

export const ProductPage = () => {
  return (
    <>
      <h1 className={styles.fw}>Product Page</h1>

      <Photos />

      <VariantsActionsBlock />

      <About />

      <TechSpecs />

      <RecommendedGoods />
    </>
  );
};
