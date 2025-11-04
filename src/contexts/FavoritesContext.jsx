import { createContext, useContext, useState, useEffect } from 'react';
import { dummyFavorites } from '../assets/assets';
import toast from 'react-hot-toast';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const fetchFavorites = async () => {
    setFavorites(dummyFavorites);
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  const toggleFavorites = (product_id) => {
    if (favorites.find((favId) => favId === product_id)) {
      setFavorites((prev) => prev.filter((item_id) => item_id !== product_id));
      toast.success('Продукт удален из Закладки!');
    } else {
      setFavorites((prev) => [...prev, product_id]);
      toast.success('Продукт добавлен в Закладки!');
    }
  };

  const value = { favorites, toggleFavorites };

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
};

export const useFavorites = () => useContext(FavoritesContext);
