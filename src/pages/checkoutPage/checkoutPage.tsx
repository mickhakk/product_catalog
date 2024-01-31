import { Link } from 'react-router-dom';
import { BackLink } from '../../components';
import styles from './checkoutPage.module.scss';

export const CheckoutPage = () => {
  return (
    <>
      <BackLink link=".." />
      <div>
        <div className={styles.Container}>
          <div className={styles.ContainerTextWrapper}>
            <p className={styles.ContainerTextWrapperValue}>
              Thank you for your purchase!
            </p>

          </div>
          <Link
            className={styles.ContainerButton}
            to="/"
          >
            Go shopping more!
          </Link>
        </div>
      </div>
    </>
  );
};
