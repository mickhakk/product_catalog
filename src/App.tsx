import { Outlet } from 'react-router-dom';
import { Footer, Header } from './components';
import { Container } from './components/Container/Container';
import styles from './App.module.scss';

export const App = () => (
  <div className={styles.app}>
    <Header />

    <main className={styles.app__main}>
      <Container>
        <Outlet />
      </Container>
    </main>

    <Footer />
  </div>
);
