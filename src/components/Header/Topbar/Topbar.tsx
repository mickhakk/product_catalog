import { Link, NavLink } from 'react-router-dom';
import cn from 'classnames';

import styles from './Topbar.module.scss';
import { Navigation } from '../Navigation/Navigation';
import { Icon } from '../../Icon';

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

  return (
    <>
      <div className={styles.topbar}>
        <div className={styles.topbar__left_side}>
          <Link
            to="/"
            className={styles.topbar__logo}
            onClick={hideMenu}
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
              ? <Icon iconType="Close" color="#313237" />
              : <Icon iconType="BurgerMenu" color="#313237" />}
          </button>

          <NavLink to="favourites" className={getButtonClass('favourites')}>
            <Icon iconType="Heart" color="#313237" />
          </NavLink>

          <NavLink to="cart" className={getButtonClass('cart')}>
            <Icon iconType="Cart" color="#313237" />
          </NavLink>
        </div>
      </div>
    </>
  );
};
