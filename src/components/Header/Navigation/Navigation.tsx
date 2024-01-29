import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import styles from './Navigation.module.scss';
import { scrollToTop } from '../../../utils/scrollToTop';

function getLinkClass({ isActive }: { isActive: boolean }): string {
  return cn(styles.nav__link, { [styles['nav__link--active']]: isActive });
}

export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className="nav__item">
          <NavLink
            to="/"
            className={getLinkClass}
            onClick={scrollToTop}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/phones"
            className={getLinkClass}
            onClick={scrollToTop}
          >
            Phones
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/tablets"
            className={getLinkClass}
            onClick={scrollToTop}
          >
            Tablets
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/accessories"
            className={getLinkClass}
            onClick={scrollToTop}
          >
            Accessories
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
