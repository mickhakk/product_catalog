import { Outlet } from 'react-router-dom';
import { AppHeader } from './components/Header/appHeader/appHeader';
import { AppFooter } from './components/Footer/appFooter/appFooter';
import { Container } from './components/Container/Container';

export const App = () => (
  <div className="wrap">
    <header className="header">
      <AppHeader />
    </header>

    <main className="main">
      <Container>
        <Outlet />
      </Container>
    </main>

    <footer className="footer">
      <AppFooter />
    </footer>
  </div>
);
