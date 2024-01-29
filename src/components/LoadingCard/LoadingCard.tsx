import styles from './LoadingCard.module.scss';

export const LoadingCard = () => {
  return (
    <div className={styles.loading_card}>
      <img src="img/loading-spinner.gif" alt="Product is loading" />
    </div>
  );
};
