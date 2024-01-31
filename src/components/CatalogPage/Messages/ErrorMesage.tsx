import styles from './error.module.scss';

export const ErrorMessage = () => (
  <div className={styles.message}>
    <p className={styles.message__text}>
      Oops! Something went wrong.
      <br />
      Please, stay with us.
    </p>
  </div>
);
