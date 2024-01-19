import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './pages/homePage';
import { PhonesCatalog } from './pages/catalogPages/phonesCatalog';
import { PageNotFound } from './pages/pageNotFound';
import { TabletsCatalog } from './pages/catalogPages/tabletsCatalog';
import { AccessoriesCatalog } from './pages/catalogPages/accessoriesCatalog';
import { FavouritesPage } from './pages/favouritesPage';
import { CartPage } from './pages/cartPage';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />

        <Route path="phones/:productId?" element={<PhonesCatalog />} />
        <Route path="tablets/:productId?" element={<TabletsCatalog />} />
        <Route
          path="accessories/:productId?"
          element={<AccessoriesCatalog />}
        />

        <Route path="favourites" element={<FavouritesPage />} />
        <Route path="cart" element={<CartPage />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </Router>
);
