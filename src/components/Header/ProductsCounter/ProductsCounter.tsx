import styles from './ProductsCounter.module.scss';

interface Props {
  quantity: number,
}

export const ProductsCounter: React.FC<Props> = ({ quantity }) => {
  return (
    <div className={styles.counter}>
      {quantity}
    </div>
  );
};
