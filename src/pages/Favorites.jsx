import { Link } from 'react-router';
import ProductsListGroup from '../components/ProductsListGroup';
import Button from '../components/ui/Button';

import { useFavorites } from '../contexts/FavoritesContext';
import { useProducts } from '../contexts/ProductsContext';

const Favorites = () => {
  const { favorites } = useFavorites();
  const { products } = useProducts();

  const favoriteProducts = products.filter((p) => favorites.includes(p._id));

  if (favoriteProducts.length === 0) {
    return (
      <div className="min-h-[77vh] flex flex-col items-center justify-center gap-4 text-center">
        <h3 className="text-2xl">Добавьте то, что понравилось</h3>
        <p className="text-sm">Перейдите на главную страницу и нажмите на ♡ в товаре</p>
        <Link
          to={'/'}
          className="flex items-center justify-center gap-2 text-primary font-medium cursor-pointer"
        >
          <Button size="md">На главную</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-[72vh]">
      <ProductsListGroup title="Мои закладки" products={favoriteProducts} />
    </div>
  );
};

export default Favorites;
