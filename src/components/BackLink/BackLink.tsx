import { Link } from 'react-router-dom';
import styles from './BackLink.module.scss';
import { Icon } from '../Icon';
import { IconType } from '../../types/IconType';

interface Props {
  link: string,
}

export const BackLink: React.FC<Props> = ({ link }) => {
  return (
    <Link to={link} className={styles.link}>
      <Icon type={IconType.arrowLeft} />
      Back
    </Link>
  );
};
