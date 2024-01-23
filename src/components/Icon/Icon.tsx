import React from 'react';
import { IconType } from '../../types/IconType';
import styles from './Icon.module.scss';

interface Props {
  type: IconType,
}

export const Icon: React.FC<Props> = ({ type }) => {
  const modifier = styles[`icon--${type}`];

  return (
    <div className={`${styles.icon} ${modifier}`} />
  );
};
