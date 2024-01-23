import { Outlet } from 'react-router-dom';
import { Footer, Header } from './components';
import styles from './App.module.scss';

export const App = () => (
  <div className={styles.app}>
    <Header />

    <main className={styles.app__main}>
      <Outlet />
    </main>

    <Footer />
  </div>
);
