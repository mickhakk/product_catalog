import { NavLink } from 'react-router-dom';
import styles from './appNavigation.module.scss';

export const AppNavigation = () => (
  <nav className={styles.nav}>
    <ul className={styles.navList}>
      <li className="nav__item">
        <NavLink
          to="/"
          className={styles.navLink}
        >
          Home
        </NavLink>
      </li>

      <li className={styles.navItem}>
        <NavLink
          to="/phones"
          className={styles.navLink}
        >
          Phones
        </NavLink>
      </li>

      <li className="nav__item">
        <NavLink
          to="/tablets"
          className={styles.navLink}
        >
          Tablets
        </NavLink>
      </li>

      <li className="nav__item">
        <NavLink
          to="/accessories"
          className={styles.navLink}
        >
          Accessories
        </NavLink>
      </li>
    </ul>
  </nav>
);
