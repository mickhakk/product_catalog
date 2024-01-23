import { Link } from 'react-router-dom';
import styles from './FooterLinks.module.scss';

export const FooterLinks = () => (
  <ul className={styles.footer_links}>
    <li className={styles.footer_links__item}>
      <a
        href="https://github.com/fe-oct23-team3/product_catalog"
        className="class_alo"
      >
        github
      </a>
    </li>

    <li className={styles.footer_links__item}>
      <Link
        to="/contacts"
        className={styles.footer_links__link}
      >
        contacts
      </Link>
    </li>

    <li className={styles.footer_links__item}>
      <Link
        to="/rights"
        className={styles.footer_links__link}
      >
        rights
      </Link>
    </li>
  </ul>
);
