import React from 'react';
import { useFavorites } from '../contexts/FavoritesContext';
import { useProducts } from '../contexts/ProductsContext';
import ProductsListGroup from '../components/ProductsListGroup';

const Favorites = () => {
  const { favorites } = useFavorites();
  const { products } = useProducts();

  const favoriteProducts = products.filter((p) => favorites.includes(p._id));

  if (favoriteProducts.length === 0) {
    return (
      <p className="my-20 flex items-center justify-center text-3xl text-center">
        Нет избранных товаров 😔
      </p>
    );
  }

  return (
    <div>
      <ProductsListGroup title="Мои закладки" products={favoriteProducts} />
    </div>
  );
};

export default Favorites;
