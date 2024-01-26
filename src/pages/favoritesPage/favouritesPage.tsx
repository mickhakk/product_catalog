import { Link } from 'react-router-dom';
import style from './favoritesPage.module.scss';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { useContextProvider } from '../../context/ProductsContext';

export const FavouritesPage = () => {
  const { favourites } = useContextProvider();
  const favouritesCount = favourites.length;
  const isPlural = favouritesCount !== 1;

  return (
    <div className={style.favorites}>
      <section className={style.favorites__page_info_wrapper}>
        <div className={style.favorites__current_location_wrapper}>
          <label htmlFor="home_link">
            <Link
              id="home_link"
              className={style.favorites__icon_home}
              to="/"
              aria-label="go home icon"
            />
          </label>
          <div className={style.favorites__icon_right_arrow} />
          <p className={style.favorites__location_page_name}>Favorites</p>
        </div>
        <h1 className={style.favorites__title}>Favourites</h1>
        <span
          className={style.favorites__favorites_counter}
        >
          {`${favouritesCount} item${isPlural ? 's' : ''}`}
        </span>
      </section>

      <section className={style.favorites__products_container}>
        {favourites.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
};
