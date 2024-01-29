import { Link, NavLink } from 'react-router-dom';
import cn from 'classnames';

import { useContext } from 'react';
import styles from './Topbar.module.scss';
import { Navigation } from '../Navigation/Navigation';
import { Icon } from '../../Icon';
import { ProductsCounter } from '../ProductsCounter/ProductsCounter';
import { ProductsContext } from '../../../context/ProductsContext';
import { scrollToTop } from '../../../utils/scrollToTop';

function getButtonClass(type: string) {
  return ({ isActive }: { isActive: boolean }) => cn(
    styles.topbar__button,
    styles[`topbar__button--${type}`],
    { [styles['topbar__button--active']]: isActive },
  );
}

interface Props {
  isMenuActive: boolean;
  hideMenu: () => void;
  toggleMenu: () => void;
}

export const Topbar: React.FC<Props> = (props) => {
  const { isMenuActive, hideMenu, toggleMenu } = props;

  const { cartProducts, favourites } = useContext(ProductsContext);
  const cartProductsQuantity = cartProducts.length;
  const favouritesProductsQuantity = favourites.length;

  const handleLogoClick = () => {
    hideMenu();
    scrollToTop();
  };

  return (
    <>
      <div className={styles.topbar}>
        <div className={styles.topbar__left_side}>
          <Link
            to="/"
            className={styles.topbar__logo}
            onClick={handleLogoClick}
          >
            <img
              src="img/Logo.svg"
              alt="Nice Gadgets logo"
            />
          </Link>

          <div className={styles.topbar__nav}>
            <Navigation />
          </div>
        </div>

        <div className={styles.topbar__buttons}>
          <button
            aria-label="menu button"
            type="button"
            className={`${styles.topbar__button} ${styles['topbar__button--menu']}`}
            onClick={toggleMenu}
          >
            {isMenuActive
              ? <Icon type="Close" color="Main" />
              : <Icon type="BurgerMenu" color="Main" />}
          </button>

          <NavLink
            to="favourites"
            className={getButtonClass('favourites')}
            onClick={scrollToTop}
          >
            <Icon type="Heart" color="Main" />
            {!!favouritesProductsQuantity
              && <ProductsCounter quantity={favouritesProductsQuantity} />}
          </NavLink>

          <NavLink
            to="cart"
            className={getButtonClass('cart')}
            onClick={scrollToTop}
          >
            <Icon type="Cart" color="Main" />
            {!!cartProductsQuantity
              && <ProductsCounter quantity={cartProductsQuantity} />}
          </NavLink>
        </div>
      </div>
    </>
  );
};
