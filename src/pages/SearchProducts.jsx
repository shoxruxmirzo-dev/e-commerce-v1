import { useState, useEffect, useMemo, useRef } from 'react';
import { Link, useSearchParams } from 'react-router';
import { useClickAway } from 'react-use';
import { ArrowUpDown } from 'lucide-react';

import Button from '../components/ui/Button';

import { useProducts } from '../contexts/ProductsContext';
import ProductCard from '../components/ProductCard';

const SearchProducts = () => {
  const { products } = useProducts();
  const [searchProducts, setSearchProducts] = useState([]);
  const [showSortType, setShowSortType] = useState(false);
  const [selectedSortType, setSelectedSortType] = useState({
    name: 'Популярности',
    sort: 'rating',
  });

  const ref = useRef(null);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query' || '');

  const sortList = [
    { name: 'Популярности', sort: 'rating' },
    { name: 'Подешевле', sort: 'asc' },
    { name: 'Подороже', sort: 'desc' },
    { name: 'По названию', sort: 'title' },
  ];

  useClickAway(ref, () => setShowSortType(false));

  // --- Количество найденных товаров
  const totalProducts = searchProducts.length;

  // --- Уникальные категории среди найденных товаров
  const uniqueCategories = new Set(searchProducts.map((p) => p.category));
  const totalCategories = uniqueCategories.size;

  // --- Поиск по запросу
  useEffect(() => {
    if (query.trim()) {
      setSearchProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(query.toLowerCase().trim())
        )
      );
    } else {
      setSearchProducts([]);
    }
  }, [query, products]);

  // --- Сортировка найденных товаров
  const sortedProducts = useMemo(() => {
    const sorted = [...searchProducts];
    switch (selectedSortType.sort) {
      case 'asc':
        return sorted.sort((a, b) => a.price - b.price);
      case 'desc':
        return sorted.sort((a, b) => b.price - a.price);
      case 'title':
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case 'rating':
      default:
        return sorted.sort((a, b) => b.rating - a.rating);
    }
  }, [searchProducts, selectedSortType]);

  return (
    <div className="flex flex-col">
      {/* --- Breadcrumb --- */}
      <p className="text-muted-foreground text-xs">
        <Link to="/">
          <Button variant="link" size="xs">
            Главная
          </Button>
        </Link>
        {'/'}
        <span className="font-medium"> Все категории</span>
      </p>

      {/* --- Заголовок --- */}
      <div className="mt-2 md:mt-4">
        Найдено {totalProducts.toLocaleString()} товаров в {totalCategories} категориях
      </div>

      {/* --- Сортировка --- */}
      {sortedProducts.length > 0 && (
        <div
          ref={ref}
          onClick={() => setShowSortType((prev) => !prev)}
          className="relative mt-4 inline-flex items-center gap-1 rounded-xl bg-background cursor-pointer text-sm z-10 self-end"
        >
          <span className="text-muted-foreground">Сначала показывать:</span>
          <span>{selectedSortType.name}</span>
          <ArrowUpDown size={16} />

          {showSortType && (
            <div
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-6 w-40 p-1 bg-background border border-border rounded shadow-2xl flex flex-col gap-2"
            >
              {sortList.map((item, index) => (
                <Button
                  key={index}
                  onClick={() => {
                    setShowSortType(false);
                    setSelectedSortType(item);
                  }}
                  variant="ghost"
                  className={`justify-normal w-full ${
                    item.sort === selectedSortType.sort ? 'text-primary hover:text-primary' : ''
                  }`}
                >
                  {item.name}
                </Button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* --- Продукты --- */}
      {sortedProducts.length > 0 ? (
        <div className="mt-4 grid grid-flow-row grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center justify-items-center gap-2 lg:gap-4">
          {sortedProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      ) : (
        <h3>Мы не нашли то, что вы искали</h3>
      )}
    </div>
  );
};

export default SearchProducts;
