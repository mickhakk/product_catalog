import { Product } from '../../../../types/Product';
import styles from '../../productPage.module.scss';

interface Props {
  productData: Product;
}

export const About: React.FC<Props> = ({ productData }) => {
  const {
    description,
  } = productData;

  return (
    <div className={`${styles.mw} ${styles.about}`}>
      <div className={styles.about_header}>
        <h2>About </h2>
      </div>
      {description.map((desc) => (
        <section key={desc.title} className={styles.about_section}>
          <h3 className={styles.about_name}>{desc.title}</h3>
          <article className={styles.about_value}>
            {desc.text.map((paragraph) => (
              <div key={paragraph}>{paragraph}</div>
            ))}
          </article>

        </section>
      ))}
    </div>
  );
};
