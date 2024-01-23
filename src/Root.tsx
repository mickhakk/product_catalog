import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './pages/homePage/homePage';
import { PhonesCatalog } from './pages/catalogPages/phonesCatalog';
import { TabletsCatalog } from './pages/catalogPages/tabletsCatalog';
import { AccessoriesCatalog } from './pages/catalogPages/accessoriesCatalog';
import { FavouritesPage } from './pages/favoritesPage/favouritesPage';
import { CartPage } from './pages/cartPage';
import { ProductsContextProvider } from './context/ProductsContext';
import { NotFoundPage } from './pages/NotFoundPage';

export const Root = () => (
  <ProductsContextProvider>
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
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  </ProductsContextProvider>
);
