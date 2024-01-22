import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import styles from './Navigation.module.scss';

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
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/phones"
            className={getLinkClass}
          >
            Phones
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/tablets"
            className={getLinkClass}
          >
            Tablets
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/accessories"
            className={getLinkClass}
          >
            Accessories
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
