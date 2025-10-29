import { useRef, useState } from 'react';
import { Link } from 'react-router';
import { Heart, ShoppingCart, CircleUserRound, LayoutList } from 'lucide-react';
import { useClickAway } from 'react-use';

import SearchBlock from './SearchBlock';
import Button from './ui/Button';
import { useAuth } from '../contexts/AuthContext';
import { useProducts } from '../contexts/ProductsContext';
import { useCart } from '../contexts/CartContext';

const Header = () => {
  const { user, setUser, setShowUserLogin } = useAuth();
  const { categories, selectedCategory, setSelectedCategory } = useProducts();
  const { getCartTotalCount } = useCart();
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const ref = useRef(null);

  useClickAway(ref, () => {
    if (showUserDropdown) setShowUserDropdown(false);
    if (isFocused) setIsFocused(false);
  });

  return (
    <>
      {isFocused && (
        <div className="fixed inset-0 z-15 flex items-center bg-black/50 text-gray-600 text-sm"></div>
      )}
      <header className="max-lg:hidden w-full py-3 bg-background relative z-15">
        <div className="container-wrapper">
          <div className="flex justify-between items-center">
            <Link to={'/'} className="flex items-center gap-1 md:gap-2 cursor-pointer">
              <img src="/vite.svg" alt="Logo" className="w-8 h-8" />
              <div>
                <h3 className="text-sm md:text-base font-semibold uppercase tracking-tighter">
                  E-Commerce
                </h3>
              </div>
            </Link>

            <div className="mx-8 flex items-center gap-4 flex-1/6">
              <Button className="">
                <LayoutList size={18} />
                <span className="">Каталог</span>
              </Button>

              <SearchBlock ref={ref} isFocused={isFocused} setIsFocused={setIsFocused} />
            </div>

            <div className="flex items-center gap-1">
              <Link to="/cart">
                <Button variant="ghost" className="relative flex items-center gap-2">
                  <ShoppingCart size={20} />
                  <span className="hidden xl:inline-block text-sm">Корзина</span>
                  <div className="absolute -top-1 -right-1 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">
                    {getCartTotalCount()}
                  </div>
                </Button>
              </Link>
              <Link to="/favorites">
                <Button variant="ghost" className="flex items-center gap-2">
                  <Heart size={20} />
                  <span className="hidden xl:inline  text-sm">Закладки</span>
                </Button>
              </Link>

              {user ? (
                <div className="relative">
                  <Button
                    onClick={() => setShowUserDropdown(true)}
                    variant="ghost"
                    className="flex items-center gap-2"
                  >
                    <CircleUserRound size={20} />
                    <span className="hidden xl:inline text-sm">{user.name}</span>
                  </Button>
                  {showUserDropdown && (
                    <div
                      ref={ref}
                      className="absolute top-10 right-0 bg-background border border-border rounded shadow flex flex-col gap-2"
                    >
                      <Link
                        to="/user/orders"
                        onClick={() => {
                          setShowUserDropdown(false);
                        }}
                      >
                        <Button variant="ghost" className="justify-normal w-full">
                          Заказы
                        </Button>
                      </Link>
                      <Link to="/user/profile" onClick={() => setShowUserDropdown(false)}>
                        <Button variant="ghost" className="justify-normal w-full">
                          Профиль
                        </Button>
                      </Link>
                      <Button
                        onClick={() => {
                          setUser(null);
                          setShowUserDropdown(false);
                        }}
                        variant="ghost"
                        className="justify-normal w-full"
                      >
                        Выйти из системы
                      </Button>
                    </div>
                  )}
                </div>
              ) : (
                <Button
                  onClick={() => {
                    setShowUserLogin(true);
                  }}
                  variant="ghost"
                  className="flex items-center gap-2"
                >
                  <CircleUserRound size={20} />
                  <span className="hidden xl:inline text-sm">Войти</span>
                </Button>
              )}
            </div>
          </div>

          <div className="mt-3 flex items-center gap-2">
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
      </header>
    </>
  );
};

export default Header;
