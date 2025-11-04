import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import {
  Heart,
  ShoppingCart,
  CircleUserRound,
  LayoutList,
  ShoppingBag,
  UserRoundCog,
  LogOut,
  Moon,
  Sun,
  Settings,
  ChevronDown,
} from 'lucide-react';
import { useClickAway } from 'react-use';

import SearchBlock from './SearchBlock';
import Button from './ui/Button';
import { useTheme } from '../contexts/ThemeProvider';
import { useAuth } from '../contexts/AuthContext';
import { useProducts } from '../contexts/ProductsContext';
import { useCart } from '../contexts/CartContext';

const Header = () => {
  const { user, setUser, setShowUserLogin } = useAuth();
  const { categories, selectedCategory, setSelectedCategory } = useProducts();
  const { getCartTotalCount } = useCart();
  const { setTheme } = useTheme();
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showThemeDropdown, setShowThemeDropdown] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const navigate = useNavigate();

  const focusRef = useRef(null);
  const themeRef = useRef(null);
  const userRef = useRef(null);

  useClickAway(focusRef, () => setIsFocused(false));
  useClickAway(themeRef, () => setShowThemeDropdown(false));
  useClickAway(userRef, () => setShowUserDropdown(false));

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

              <SearchBlock ref={focusRef} isFocused={isFocused} setIsFocused={setIsFocused} />
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
                <div ref={userRef} className="relative">
                  <Button
                    onClick={() => setShowUserDropdown((prev) => !prev)}
                    variant="ghost"
                    className="flex items-center gap-2"
                  >
                    <CircleUserRound size={20} />
                    <span className="hidden xl:inline text-sm">{user.name}</span>
                  </Button>
                  {showUserDropdown && (
                    <div className="p-1 absolute top-10 right-0 bg-background border border-border rounded shadow flex flex-col gap-2">
                      <Link
                        to="/user/orders"
                        onClick={() => {
                          setShowUserDropdown(false);
                        }}
                      >
                        <Button variant="ghost" className="justify-start font-normal w-full">
                          <ShoppingBag size={20} strokeWidth={1.5} />
                          Мои заказы
                        </Button>
                      </Link>
                      <Link to="/user/profile" onClick={() => setShowUserDropdown(false)}>
                        <Button variant="ghost" className="justify-start font-normal w-full">
                          <UserRoundCog size={22} strokeWidth={1.5} />
                          Профиль
                        </Button>
                      </Link>
                      <Button
                        onClick={() => {
                          setUser(null);
                          navigate('/');
                          setShowUserDropdown(false);
                        }}
                        variant="ghost"
                        className="justify-start w-full font-normal hover:text-destructive border-t border-border"
                      >
                        <LogOut size={22} strokeWidth={1.5} />
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

            <div ref={themeRef} className="relative">
              <Button
                onClick={() => setShowThemeDropdown((prev) => !prev)}
                variant="ghost"
                className="flex items-center gap-2"
                title="Выбрать тему"
              >
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <span className="sr-only">Выбрать тему</span>
              </Button>
              {showThemeDropdown && (
                <div className="p-1 absolute top-10 right-0 bg-background border border-border rounded shadow flex flex-col gap-2">
                  <Button
                    onClick={() => {
                      setShowThemeDropdown(false);
                      setTheme('light');
                    }}
                    variant="ghost"
                    className="justify-start w-full font-normal"
                  >
                    <Sun size={22} strokeWidth={1.5} />
                    Светлый
                  </Button>
                  <Button
                    onClick={() => {
                      setShowThemeDropdown(false);
                      setTheme('dark');
                    }}
                    variant="ghost"
                    className="justify-start w-full font-normal"
                  >
                    <Moon size={22} strokeWidth={1.5} />
                    Темный
                  </Button>
                  <Button
                    onClick={() => {
                      setShowThemeDropdown(false);
                      setTheme('system');
                    }}
                    variant="ghost"
                    className="justify-start w-full font-normal"
                  >
                    <Settings size={22} strokeWidth={1.5} />
                    Системный
                  </Button>
                </div>
              )}
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between gap-2">
            <div className="w-11/12 flex items-center  gap-2 overflow-x-auto scrollbar-none whitespace-nowrap">
              {categories.map((cat, index) => (
                <Link key={index} to={`/category/${cat.path}-${cat._id}`}>
                  <Button
                    variant={cat.path === selectedCategory ? 'primary' : 'ghost'}
                    onClick={() => setSelectedCategory(cat.path)}
                  >
                    {cat.text}
                  </Button>
                </Link>
              ))}
            </div>
            <Button variant="ghost">
              <span className="flex items-center">
                Ещё
                <ChevronDown size={14} />
              </span>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
