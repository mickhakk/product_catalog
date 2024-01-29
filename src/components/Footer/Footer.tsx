import { Link } from 'react-router-dom';
import { FooterLinks } from './FooterLinks/FooterLinks';
import styles from './Footer.module.scss';
import { Icon } from '../Icon';
import { scrollToTop } from '../../utils/scrollToTop';

export const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer__content}>
          <Link
            to="/"
            className={styles.footer__logo}
            onClick={scrollToTop}
          >
            <img
              src="img/Logo.svg"
              alt="Nice Gadgets logo"
              className={styles.footer__logo_image}
            />
          </Link>

          <FooterLinks />

          <button
            className={styles.footer__go_top}
            type="button"
            onClick={scrollToTop}
          >
            Back to top
            <div className={styles.footer__arrow_button}>
              <Icon type="ArrowUp" color="Main" />
            </div>
          </button>
        </div>
      </footer>
    </>
  );
};
