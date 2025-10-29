import { Link } from 'react-router';
import { Heart, Minus, Plus } from 'lucide-react';

import Button from './ui/Button';

import { useCart } from '../contexts/CartContext';
import { useFavorites } from '../contexts/FavoritesContext';
import { useProducts } from '../contexts/ProductsContext';

const ProductCard = ({ product }) => {
  const { cart, addToCart, removeFromCart } = useCart();
  const { favorites, toggleFavorites } = useFavorites();
  const { currency } = useProducts();

  const isFavorited = favorites.some((favId) => favId === product._id);

  return (
    product && (
      <Link
        to={`/product/${product.name.toLowerCase()}-${product._id}`}
        className="relative h-full w-full min-w-28 flex flex-col gap-0.5 border border-border rounded-xl overflow-hidden transition"
      >
        <div className="rounded-xl">
          <img src={product.image[0]} alt={product.name} className="object-cover" />
          <Button
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              toggleFavorites(product._id);
            }}
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2"
          >
            <Heart
              size={20}
              fill={`${isFavorited ? 'red' : 'white'}`}
              className={`${isFavorited ? 'text-red-500' : 'text-muted-foreground'}`}
            />
          </Button>
        </div>

        <div className="flex flex-col gap-0.5 p-2">
          <h3 className="mt-2 text-sm" title={product.name}>
            {product.name}
          </h3>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <p className="text-xs uppercase text-muted-foreground">Цена:</p>
              <b className="text-sm font-bold">
                {product.price.toLocaleString('ru-RU')} {currency}
              </b>
            </div>
            <div
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
              }}
              className="text-primary"
            >
              {!cart[product._id] ? (
                <Button variant="outline" onClick={() => addToCart(product._id)}>
                  <span>В корзину</span>
                </Button>
              ) : (
                <div className="px-4 flex items-center justify-center gap-1 ml-auto border border-primary/30 w-5/6 h-[34px] bg-primary/25 rounded-md select-none">
                  <button
                    onClick={() => removeFromCart(product._id)}
                    className="cursor-pointer text-md px-0.5 h-full"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="min-w-4 text-center">{cart[product._id]}</span>
                  <button
                    onClick={() => addToCart(product._id)}
                    className="cursor-pointer text-md px-0.5 h-full"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    )
  );
};

export default ProductCard;
