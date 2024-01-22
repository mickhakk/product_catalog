import { FooterLinks } from './FooterLinks/FooterLinks';
import styles from './Footer.module.scss';

export const Footer = () => (
  <>
    <div className={styles.Footer}>
      <p>
        logo
      </p>

      <FooterLinks />

      <a href="/">
        Back to top
      </a>
    </div>
  </>
);
