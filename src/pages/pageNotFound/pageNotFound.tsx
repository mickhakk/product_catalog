import React from 'react';
import styles from './pageNotFound.module.scss';

export const PageNotFound: React.FC = () => {
  return (
    <main>
      <div className={styles['max-w-screen-xl']}>
        <div className={styles['max-w-lg']}>
          <h3
            className={`${styles['text-primary-600']} ${styles['font-semibold']}`}
          >
            404 Error
          </h3>
          <p
            className={`${styles['text-gray-800']}
                        ${styles['text-4xl']}
                        ${styles['font-semibold']}`}
          >
            Page not found
          </p>
          <p className={styles['text-gray-600']}>
            Sorry, the page you are looking for could not be found or has been
            removed.
          </p>
          <div
            className={`${styles.flex}
                        ${styles['flex-wrap']}
                        ${styles['items-center']}
                        ${styles['justify-center']}
                        ${styles['gap-3']}`}
          >
            <button
              type="button"
              onClick={() => window.history.back()}
              className={`${styles.button} ${styles['button--primary']}`}
            >
              Go back
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
