import { Link, useLocation } from 'react-router-dom';
import styles from './Breadcrumbs.module.scss';

export const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const arrayOfCrumbs = pathname.split('/')
    .filter(path => path.length > 0);

  return (
    <div className={styles.breadcrumbs}>
      <label htmlFor="home_link">
        <Link
          id="home_link"
          className={styles['breadcrumbs--icon-home']}
          to="/"
          aria-label="go home icon"
        />
      </label>
      { arrayOfCrumbs.map((crumb, index) => {
        const capitalCrumb = crumb[0].toUpperCase() + crumb.slice(1);
        const currenPath = arrayOfCrumbs.slice(0, index + 1).join('/');

        return (
          <>
            <div className={styles['breadcrumbs--icon-right-arrow']} />
            <Link
              className={styles['breadcrumbs--location-page-name']}
              to={`/${currenPath}`}
            >
              {capitalCrumb}
            </Link>
          </>
        );
      })}
    </div>
  );
};
