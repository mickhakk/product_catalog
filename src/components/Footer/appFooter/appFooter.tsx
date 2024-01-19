import { AppFooterLinks } from '../appFooterLinks/appFooterLinks';
import styles from './appFooter.module.scss';

export const AppFooter = () => (
  <>
    <div className={styles.footer}>
      <p>
        logo
      </p>

      <AppFooterLinks />

      <a href="/">
        Back to top
      </a>
    </div>
  </>
);
