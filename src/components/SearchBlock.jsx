import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useDebounce } from 'react-use';
import { Search } from 'lucide-react';
import { useProducts } from '../contexts/ProductsContext';

const SearchBlock = ({ ref, isFocused, setIsFocused, className = '' }) => {
  const { products, query, setQuery } = useProducts();
  const [results, setResults] = useState([]);

  const navigate = useNavigate();

  useDebounce(
    () => {
      if (query.length > 0) {
        setResults(
          products.filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase().trim())
          )
        );
      }
    },
    250,
    [query, results]
  );

  const handleSearch = () => {
    if (query.trim()) {
      setIsFocused(false);
      navigate(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  const handleSelect = (name) => {
    setQuery(name);
    setIsFocused(false);
    navigate(`/search?query=${encodeURIComponent(name)}`);
  };

  return (
    <div
      ref={ref}
      className={`relative flex flex-1 border border-border px-3 py-1.5 items-center gap-4 bg-background rounded-md text-sm ${className}`}
    >
      <input
        value={query}
        onFocus={() => setIsFocused(true)}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="Поиск..."
        className="w-11/12 outline-none"
      />
      <button
        onClick={handleSearch}
        className="absolute right-0 top-0 h-[32px] px-5 py-2 bg-secondary rounded-br-md cursor-pointer"
      >
        <Search size={18} className="text-muted-foreground" />
      </button>
      {isFocused && query.length > 0 && (
        <div className="max-h-100 overflow-y-auto absolute top-9 left-0 right-0 bg-background border border-border shadow rounded z-15">
          {results.length > 0 ? (
            <ul className="flex flex-col gap-2">
              {results.map((product, index) => (
                <li
                  key={index}
                  onClick={() => handleSelect(product.name)}
                  className="w-full px-3 py-2 flex items-center gap-3 hover:bg-secondary rounded-md cursor-pointer"
                >
                  <img src={product.image[0]} alt={product.name} className="rounded h-8 w-8" />
                  <span>{product.name}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-2">Ничего не найдено</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBlock;
