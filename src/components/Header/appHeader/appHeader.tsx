import { Link } from 'react-router-dom';
import {
  AppNavigation,
} from '../appNavigation/AppNavigation';
import styles from './appHeader.module.scss';

export const AppHeader = () => (
  <>
    <div className={styles.headerWrapper}>
      <div className={styles.header}>
        <div className={styles.headerLeftSide}>
          <p className={styles.headerLogo}>
            logo
          </p>

          <AppNavigation />
        </div>

        <div className={styles.headerRightSide}>
          <Link to="favourites">
            favourites
          </Link>

          <Link to="cart">
            Cart
          </Link>
        </div>
      </div>
    </div>
  </>
);
