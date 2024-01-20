import { Link } from 'react-router-dom';
import styles from './appFooterLinks.module.scss';

export const AppFooterLinks = () => (
  <ul className={styles.links}>
    <li className={styles.linksItem}>
      <Link
        to="/"
        className={styles.linksLink}
      >
        github
      </Link>
    </li>

    <li className={styles.linksItem}>
      <Link
        to="/phones"
        className={styles.linksLink}
      >
        contacts
      </Link>
    </li>

    <li className={styles.linksItem}>
      <Link
        to="/tablets"
        className={styles.linksLink}
      >
        rights
      </Link>
    </li>
  </ul>
);
