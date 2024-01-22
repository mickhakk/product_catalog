import styles from './Container.module.scss';

interface Props {
  children: JSX.Element
}

export const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};
