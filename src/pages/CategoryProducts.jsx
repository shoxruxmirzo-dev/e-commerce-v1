import { useEffect, useMemo, useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import { Link, useParams } from 'react-router';

import { ArrowUpDown } from 'lucide-react';
import Button from '../components/ui/Button';
import Title from '../components/Title';
import ProductCard from '../components/ProductCard';

import { useProducts } from '../contexts/ProductsContext';

const CategoryProducts = () => {
  const { categories, products, setQuery, setSelectedCategory } = useProducts();
  const [showSortType, setShowSortType] = useState(false);
  const [selectedSortType, setSelectedSortType] = useState({
    name: 'Популярности',
    sort: 'rating',
  });

  const ref = useRef(null);
  const { category_name_id } = useParams();

  const sortList = [
    { name: 'Популярности', sort: 'rating' },
    { name: 'Подешевле', sort: 'asc' },
    { name: 'Подороже', sort: 'desc' },
    { name: 'По алфавиту', sort: 'title' },
  ];

  useClickAway(ref, () => setShowSortType(false));

  // --- Получаем слаг категории из URL
  const categorySlug = category_name_id.split('-')[0].toLowerCase();

  // --- Ищем категорию или создаём "виртуальную" для "Все категории"
  const searchCategory = categories.find((item) => item.path.toLowerCase() === categorySlug) || {
    text: 'Все категории',
    path: 'allcategories',
  };

  // --- Фильтрация продуктов
  const filteredProducts = useMemo(() => {
    if (categorySlug === 'allcategories') {
      return products;
    }
    return products.filter((product) => product.category.toLowerCase() === categorySlug);
  }, [products, categorySlug]);

  // --- Сортировка продуктов
  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts];

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
  }, [filteredProducts, selectedSortType]);

  useEffect(() => {
    setQuery('');
  }, []);

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
        {searchCategory.path === 'allcategories' ? (
          <span className="font-medium"> Все категории</span>
        ) : (
          <>
            <Link to="/category/allcategories-001">
              <Button onClick={() => setSelectedCategory(null)} variant="link" size="xs">
                Все категории
              </Button>
            </Link>
            {'/'}

            <span className="font-medium"> {searchCategory.text}</span>
          </>
        )}
      </p>

      {/* --- Заголовок категории --- */}
      <div className="mt-4">
        <Title title={searchCategory.text} className="text-2xl" />
        <p className="mt-1 text-sm text-muted-foreground">
          Найдено {filteredProducts.length.toLocaleString()} товаров
        </p>
      </div>

      {/* --- Сортировка --- */}
      <div
        ref={ref}
        onClick={() => setShowSortType((prev) => !prev)}
        className="relative mt-4 inline-flex items-center gap-1 rounded-xl bg-background cursor-pointer text-sm z-10"
      >
        <span className="text-muted-foreground">Сначала показывать:</span>
        <span>{selectedSortType.name}</span>
        <ArrowUpDown size={16} />

        {showSortType && (
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute left-0 top-6 w-40 p-1 bg-background border border-border rounded shadow-2xl flex flex-col gap-2"
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

export default CategoryProducts;
