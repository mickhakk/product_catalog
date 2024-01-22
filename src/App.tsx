import { Outlet } from 'react-router-dom';
import { Footer, Header } from './components';
import styles from './App.module.scss';

export const App = () => (
  <div className={styles.app}>
    <header className="header">
      <Header />
    </header>

    <main className="main">
      <Outlet />
    </main>

    <footer className="footer">
      <Footer />
    </footer>
  </div>
);
