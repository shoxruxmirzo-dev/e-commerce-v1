import React from 'react';
import { Link, useNavigate } from 'react-router';
import {
  BriefcaseBusiness,
  Languages,
  LogOut,
  ShoppingBag,
  User,
  UserRoundCog,
} from 'lucide-react';
import Button from '../ui/Button';

import { useAuth } from '../../contexts/AuthContext';

const Settings = () => {
  const { user, setUser, setSelectedLink, setShowUserLogin, showUserCabinet, setShowUserCabinet } =
    useAuth();

  const navigate = useNavigate();

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
        <div className="mt-2 pb-2 border-b border-border">
          <Button variant="ghost" className="justify-start w-full font-normal">
            <Languages size={20} strokeWidth={1.5} />
            Язык сайта
          </Button>
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
