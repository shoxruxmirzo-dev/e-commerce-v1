import { createContext, useContext, useState, useEffect } from 'react';
import { dummyCategories, dummyProducts } from '../assets/assets';

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY;

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const fetchCategories = async () => {
    setCategories(dummyCategories);
  };

  const fetchProducts = async (filters = {}) => {
    setProducts(dummyProducts);
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  const value = {
    currency,
    categories,
    products,
    loading,
    query,
    setQuery,
    selectedCategory,
    setSelectedCategory,
  };

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};

export const useProducts = () => useContext(ProductsContext);
