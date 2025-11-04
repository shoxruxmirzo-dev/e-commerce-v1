import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router';
import { useClickAway } from 'react-use';
import {
  BriefcaseBusiness,
  ChevronDown,
  Eclipse,
  Languages,
  LogOut,
  ShoppingBag,
  User,
  UserRoundCog,
  Sun,
  Moon,
  Settings as SettingsIcon,
  ChevronUp,
} from 'lucide-react';
import Button from '../ui/Button';

import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeProvider';

const Settings = () => {
  const { theme, setTheme } = useTheme();
  const { user, setUser, setSelectedLink, setShowUserLogin, showUserCabinet, setShowUserCabinet } =
    useAuth();
  const [showThemeDropdown, setShowThemeDropdown] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [language, setLanguage] = useState('rus');

  const navigate = useNavigate();
  const themeRef = useRef(null);
  const langRef = useRef(null);

  useClickAway(themeRef, () => setShowThemeDropdown(false));
  useClickAway(langRef, () => setShowLangDropdown(false));

  return (
    showUserCabinet && (
      <div className="lg:hidden fixed top-0 left-0 z-45 h-full w-full pb-[57px] bg-background px-4 py-4 text-sm">
        <div className="pb-2 flex items-center justify-end border-b border-border">
          {user ? (
            <div className="p-2 font-medium flex items-center gap-2">
              <User size={20} strokeWidth={1.5} /> {user.name}
            </div>
          ) : (
            <Button
              onClick={() => {
                setShowUserLogin(true);
              }}
              variant="link"
              className="flex items-center gap-2 font-normal"
            >
              <span className="text-foreground">Войти / Зарегистрироваться</span>
            </Button>
          )}
        </div>
        <div className="mt-2 pb-2 border-b border-border ">
          <div ref={themeRef} className="relative">
            <Button
              onClick={() => setShowThemeDropdown((prev) => !prev)}
              variant="ghost"
              className="justify-start w-full font-normal relative"
            >
              <div className="flex items-center gap-2 justify-between">
                <Eclipse size={20} strokeWidth={1.5} />
                Тема:
              </div>
              <div className="ml-auto flex items-center font-semibold">
                <span>
                  {theme === 'light' ? (
                    <span className="flex items-center gap-1">
                      <Sun size={16} />
                      Светлый
                    </span>
                  ) : theme === 'dark' ? (
                    <span className="flex items-center gap-1">
                      <Moon size={16} />
                      Темный
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      <SettingsIcon size={16} />
                      Системный
                    </span>
                  )}
                </span>
                {showThemeDropdown ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </div>
            </Button>
            {showThemeDropdown && (
              <div className="p-1 absolute top-10 right-0 bg-background border border-border rounded shadow flex flex-col z-15">
                <Button
                  onClick={() => {
                    setShowThemeDropdown(false);
                    setTheme('light');
                  }}
                  variant="ghost"
                  className="justify-start w-full font-normal"
                >
                  <Sun size={16} />
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
                  <Moon size={16} />
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
                  <SettingsIcon size={16} />
                  Системный
                </Button>
              </div>
            )}
          </div>
          <div ref={langRef} className="relative">
            <Button
              onClick={() => setShowLangDropdown((prev) => !prev)}
              variant="ghost"
              className="justify-start w-full font-normal"
            >
              <div className="flex items-center gap-2 justify-between">
                <Languages size={20} strokeWidth={1.5} />
                Язык сайта:
              </div>
              <div className="ml-auto flex items-center font-semibold">
                <span>{language === 'rus' ? 'Русский' : 'Ўзбекча'}</span>
                {showLangDropdown ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </div>
            </Button>
            {showLangDropdown && (
              <div className="p-1 absolute top-10 right-0 bg-background border border-border rounded shadow flex flex-col z-10">
                <Button
                  onClick={() => {
                    setShowLangDropdown(false);
                    setLanguage('rus');
                  }}
                  variant="ghost"
                  className="justify-start w-full font-normal"
                >
                  Русский
                </Button>
                <Button
                  onClick={() => {
                    setShowLangDropdown(false);
                    setLanguage('uzb');
                  }}
                  variant="ghost"
                  className="justify-start w-full font-normal"
                >
                  Ўзбекча
                </Button>
              </div>
            )}
          </div>
          <Button variant="ghost" className="justify-start w-full font-normal">
            <BriefcaseBusiness size={20} strokeWidth={1.5} />
            Стать продавцом
          </Button>
        </div>
        <div className="mt-2">
          {user && (
            <>
              <div className="mt-2 pb-2 border-b border-border">
                <Link
                  to="/user/orders"
                  onClick={() => {
                    setShowUserCabinet(false);
                    setSelectedLink(null);
                  }}
                >
                  <Button variant="ghost" className="justify-start w-full font-normal">
                    <ShoppingBag size={20} strokeWidth={1.5} />
                    Мои заказы
                  </Button>
                </Link>
                <Link
                  to="/user/profile"
                  onClick={() => {
                    setShowUserCabinet(false);
                    setSelectedLink(null);
                  }}
                >
                  <Button variant="ghost" className="justify-start w-full font-normal">
                    <UserRoundCog size={20} strokeWidth={1.5} />
                    Профиль
                  </Button>
                </Link>
              </div>
              <Button
                onClick={() => {
                  setUser(null);
                  navigate('/');
                  setShowUserCabinet(false);
                  setSelectedLink(null);
                }}
                variant="ghost"
                className="mt-3 justify-start w-full font-normal text-destructive hover:text-destructive"
              >
                <LogOut size={20} strokeWidth={1.5} />
                Выйти из системы
              </Button>
            </>
          )}
        </div>
      </div>
    )
  );
};

export default Settings;
