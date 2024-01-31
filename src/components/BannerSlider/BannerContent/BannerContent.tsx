import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './BannerContent.module.scss';
import { Device } from '../../../types/Device';

interface Props {
  imageMobile: string,
  imageTablet: string,
  imageDesktop: string,
  link: string,
  description: string,
}

export const BannerContent: React.FC<Props> = ({
  imageMobile,
  imageTablet,
  imageDesktop,
  link,
  description,
}) => {
  const [image, setImage] = useState('');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < Device.Tablet) {
        setImage(imageMobile);
      }

      if (window.innerWidth >= Device.Tablet
        && window.innerWidth < Device.Desktop) {
        setImage(imageTablet);
      }

      if (window.innerWidth >= Device.Desktop) {
        setImage(imageDesktop);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [imageDesktop, imageMobile, imageTablet]);

  return (
    <Link
      to={link}
      className={styles.image_container}
    >
      <img
        className={styles.image}
        src={image}
        alt={description}
      />
    </Link>
  );
};
