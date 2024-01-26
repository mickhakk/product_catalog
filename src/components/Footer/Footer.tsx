import { Link } from 'react-router-dom';
import { FooterLinks } from './FooterLinks/FooterLinks';
import styles from './Footer.module.scss';
import { Icon } from '../Icon';
// import { IconType } from '../../types/IconType';

export const Footer = () => {
  const onGoToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer__content}>
          <Link
            to="/"
            className={styles.footer__logo}
            onClick={onGoToTop}
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
            onClick={onGoToTop}
          >
            Back to top
            <div className={styles.footer__arrow_button}>
              <Icon iconType="ArrowUp" color="#313237" />
            </div>
          </button>
        </div>
      </footer>
    </>
  );
};
