import { useEffect } from 'react';
import Banner from '../components/Banner';
import ProductsListGroup from '../components/ProductsListGroup';
import { useProducts } from '../contexts/ProductsContext';

const Home = () => {
  const { products, setQuery, setSelectedCategory } = useProducts();

  const bestSellers = [...products].sort((a, b) => a.name - b.name).slice(0, 5);
  const lowPrices = [...products].sort((a, b) => a.price - b.price).slice(0, 5);
  const recentlyAdded = [...products].sort((a, b) => b.price - a.price).slice(0, 5);

  useEffect(() => {
    setSelectedCategory(null);
    setQuery('');
  }, []);

  return (
    <div>
      <Banner />
      <ProductsListGroup title="Популярные" products={bestSellers} />
      <ProductsListGroup title="Низкие цены" products={lowPrices} />
      <ProductsListGroup title="Недавно добавленные" products={recentlyAdded} />
    </div>
  );
};

export default Home;
