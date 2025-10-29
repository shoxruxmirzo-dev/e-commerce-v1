import { useRef, useState } from 'react';
import { useClickAway } from 'react-use';

import SearchBlock from '../SearchBlock';
import { useProducts } from '../../contexts/ProductsContext';
import { Link } from 'react-router';
import Button from './../ui/Button';

const TopBar = () => {
  const { categories, selectedCategory, setSelectedCategory } = useProducts();
  const [isFocused, setIsFocused] = useState(false);

  const ref = useRef(null);

  useClickAway(ref, () => {
    if (isFocused) setIsFocused(false);
  });

  return (
    <>
      {isFocused && (
        <div className="fixed inset-0 z-15 flex items-center bg-black/50 text-gray-600 text-sm"></div>
      )}
      <div className="sticky top-0 left-0 z-20 px-6 py-2 w-full flex flex-col lg:hidden items-center gap-2 bg-background text-sm">
        <SearchBlock
          ref={ref}
          isFocused={isFocused}
          setIsFocused={setIsFocused}
          className="w-full"
        />
        <div className="w-full flex items-center gap-2 overflow-x-auto scrollbar-none whitespace-nowrap">
          {categories.map((cat, index) => (
            <Link key={index} to={`/category/${cat.path.toLowerCase()}-${cat._id}`}>
              <Button
                variant={cat.path === selectedCategory ? 'primary' : 'ghost'}
                onClick={() => setSelectedCategory(cat.path)}
              >
                {cat.text}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default TopBar;
