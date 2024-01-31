import { FC } from 'react';
import styles from './error.module.scss';

interface Props {
  product: string;
}
export const NoProducts: FC<Props> = ({ product }) => (
  <div className={styles.message}>
    <p className={styles.message__text}>{`There are no ${product}`}</p>
  </div>
);
