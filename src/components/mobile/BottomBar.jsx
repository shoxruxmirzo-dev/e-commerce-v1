import { useRef, useState } from 'react';
import { Link } from 'react-router';
import { ShoppingCart, Home, User, List, Heart } from 'lucide-react';
import Button from '../ui/Button';

import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';
import { useProducts } from '../../contexts/ProductsContext';

const BottomBar = () => {
  const { getCartTotalCount } = useCart();
  const { selectedLink, setSelectedLink, setShowUserCabinet } = useAuth();
  const { setShowCatalog } = useProducts();

  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-border bg-background text-muted-foreground lg:hidden flex justify-around py-2 z-50">
      <Link to="/">
        <Button
          variant={'home' === selectedLink ? 'routeLink' : 'ghost'}
          size="lg"
          onClick={() => {
            setSelectedLink('home');
            setShowUserCabinet(false);
            setShowCatalog(false);
          }}
          className="flex flex-col max-xs:text-xs"
        >
          <Home className="max-xs:w-4" />
          Главная
        </Button>
      </Link>
      <Button
        variant={'catalog' === selectedLink ? 'routeLink' : 'ghost'}
        size="lg"
        onClick={() => {
          setSelectedLink('catalog');
          setShowUserCabinet(false);
          setShowCatalog(true);
        }}
        className="flex flex-col max-xs:text-xs"
      >
        <List className="max-xs:w-4" />
        Каталог
      </Button>
      <Link to="/cart">
        <Button
          variant={'cart' === selectedLink ? 'routeLink' : 'ghost'}
          size="lg"
          onClick={() => {
            setSelectedLink('cart');
            setShowUserCabinet(false);
            setShowCatalog(false);
          }}
          className="flex flex-col relative max-xs:text-xs"
        >
          <ShoppingCart className="max-xs:w-4" />
          Корзина
          <div className="absolute top-0 left-13 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">
            {getCartTotalCount()}
          </div>
        </Button>
      </Link>
      <Link to="/favorites">
        <Button
          variant={'favorites' === selectedLink ? 'routeLink' : 'ghost'}
          size="lg"
          onClick={() => {
            setSelectedLink('favorites');
            setShowUserCabinet(false);
            setShowCatalog(false);
          }}
          className="flex flex-col max-xs:text-xs"
        >
          <Heart className="max-xs:w-4" />
          Избранные
        </Button>
      </Link>
      <Button
        variant={'profile' === selectedLink ? 'routeLink' : 'ghost'}
        size="lg"
        onClick={() => {
          setSelectedLink('profile');
          setShowUserCabinet(true);
          setShowCatalog(false);
        }}
        className="flex flex-col max-xs:text-xs"
      >
        <User className="max-xs:w-4" />
        Кабинет
      </Button>
    </nav>
  );
};

export default BottomBar;
