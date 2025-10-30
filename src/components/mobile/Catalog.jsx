import React from 'react';
import { Link } from 'react-router';
import { ChevronDown } from 'lucide-react';
import Button from '../ui/Button';
import { useProducts } from '../../contexts/ProductsContext';
import { useAuth } from '../../contexts/AuthContext';

const Catalog = () => {
  const { categories, showCatalog, setShowCatalog, setSelectedCategory } = useProducts();
  const { setSelectedLink } = useAuth();

  return (
    showCatalog && (
      <div className="lg:hidden fixed top-0 left-0 z-45 h-full w-full pb-[57px] bg-background px-4 py-4 text-sm">
        <div className="mt-3 flex flex-col gap-2">
          {categories.map((cat, index) => (
            <Link
              key={index}
              to={`/category/${cat.path.toLowerCase()}-${cat._id}`}
              className="flex items-center rounded-md hover:bg-accent hover:text-accent-foreground pr-1"
            >
              <Button
                variant="ghost"
                onClick={() => {
                  setSelectedCategory(cat.path);
                  setShowCatalog(false);
                  setSelectedLink(null);
                }}
                className="justify-start w-full font-normal"
              >
                {cat.text}
              </Button>
              <ChevronDown size={22} strokeWidth={1.5} />
            </Link>
          ))}
        </div>
      </div>
    )
  );
};

export default Catalog;
