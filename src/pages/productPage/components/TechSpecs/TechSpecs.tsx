import { ProductDetails } from '../../../../types/Product';
import styles from '../../productPage.module.scss';

interface Props {
  productData: ProductDetails;
}

export const TechSpecs: React.FC<Props> = ({ productData }) => {
  const {
    screen,
    resolution,
    processor,
    ram,
    capacity,
    camera,
    zoom,
    cell,
  } = productData;

  const techSpecs = [
    { name: 'Screen', value: screen },
    { name: 'Resolution', value: resolution },
    { name: 'Processor', value: processor },
    { name: 'RAM', value: ram },
    { name: 'Built in Memory', value: capacity },
    { name: 'Camera', value: camera },
    { name: 'Zoom', value: zoom },
    { name: 'Cell', value: cell.join(', ') },
  ];

  return (
    <div className={`${styles.mw_r} ${styles.mw} ${styles.tech}`}>
      <div className={styles.tech_header}>
        <h2>Tech specs </h2>
      </div>
      {techSpecs.map((spec) => (
        <section key={spec.name} className={styles.tech_section}>
          <article className={styles.tech_name}>{spec.name}</article>
          <article className={styles.tech_value}>{spec.value}</article>
        </section>
      ))}
    </div>
  );
};
