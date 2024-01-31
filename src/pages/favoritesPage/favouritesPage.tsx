import style from './favoritesPage.module.scss';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { useContextProvider } from '../../context/ProductsContext';

export const FavouritesPage = () => {
  const { favourites } = useContextProvider();
  const favouritesCount = favourites.length;
  const isPlural = favouritesCount !== 1;

  return (
    <div className={style.favorites}>
      <section className={style.favorites__page_info_wrapper}>
        <Breadcrumbs />
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
