import { Outlet } from 'react-router-dom';
import { AppHeader } from './components/Header/appHeader/appHeader';
import { AppFooter } from './components/Footer/appFooter/appFooter';

export const App = () => (
  <div className="wrap">
    <header className="header">
      <AppHeader />
    </header>

    <main className="main">
      <Outlet />
    </main>

    <footer className="footer">
      <AppFooter />
    </footer>
  </div>
);
