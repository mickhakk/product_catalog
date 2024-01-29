import { FC } from 'react';
import styles from './error.module.scss';

interface Props {
  product: string;
}
export const NoProducts: FC<Props> = ({ product }) => (
  <p className={styles.message}>{`There are no ${product}`}</p>
);
