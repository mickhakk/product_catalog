import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './pages/homePage';
import { PhonesCatalog } from './pages/catalogPages/phonesCatalog';
import { TabletsCatalog } from './pages/catalogPages/tabletsCatalog';
import { AccessoriesCatalog } from './pages/catalogPages/accessoriesCatalog';
import { FavouritesPage } from './pages/favouritesPage';
import { CartPage } from './pages/cartPage';
import { ProductsContextProvider } from './context/ProductsContext';
import { PageNotFound } from './pages/pageNotFound';

export const Root = () => (
  <ProductsContextProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />

          <Route path="phones/:productId?">
            <Route index element={<PhonesCatalog />} />
            <Route path=":productId" element={<PhonesCatalog />} />
          </Route>
          <Route path="tablets/:productId?">
            <Route index element={<TabletsCatalog />} />
            <Route path=":productId" element={<TabletsCatalog />} />
          </Route>
          <Route
            path="accessories/:productId?"
          >
            <Route index element={<AccessoriesCatalog />} />
            <Route path=":productId" element={<AccessoriesCatalog />} />
          </Route>
          <Route path="favourites" element={<FavouritesPage />} />
          <Route path="cart" element={<CartPage />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  </ProductsContextProvider>
);
