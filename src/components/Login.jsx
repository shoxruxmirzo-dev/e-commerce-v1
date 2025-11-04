import { useState, useRef } from 'react';
import { useClickAway } from 'react-use';

import Button from './ui/Button';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const { setUser, showUserLogin, setShowUserLogin } = useAuth();
  const [state, setState] = useState('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const ref = useRef(null);

  useClickAway(ref, () => setShowUserLogin(false));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUser({
      name: 'Shoxruxmirzo',
      email: 'mrshon4554@gmail.com',
    });
    setShowUserLogin(false);
  };

  return (
    showUserLogin && (
      <div className="fixed inset-0 z-60 flex items-center bg-black/50 text-gray-600 text-sm">
        <form
          onSubmit={handleSubmit}
          ref={ref}
          className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] bg-background text-gray-500 rounded-lg shadow-xl border border-border"
        >
          <p className="text-2xl font-medium m-auto">
            <span className="text-primary"></span> {state === 'login' ? 'Вход' : 'Регистрация'}
          </p>
          {state === 'register' && (
            <div className="w-full">
              <p>Ваше имя</p>
              <input
                onChange={(e) => setName(e.target.value)}
                placeholder=""
                className="border border-border rounded w-full p-2 mt-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                type="text"
                required
              />
            </div>
          )}
          <div className="w-full ">
            <p>Электронная почта</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              placeholder=""
              className="border border-border rounded w-full p-2 mt-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              type="email"
              required
            />
          </div>
          <div className="w-full ">
            <p>Пароль</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              placeholder=""
              className="border border-border rounded w-full p-2 mt-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              type="password"
              required
            />
          </div>
          {state === 'register' ? (
            <p>
              Есть аккаунт?{' '}
              <span
                onClick={() => setState('login')}
                className="text-primary cursor-pointer hover:underline"
              >
                Войти
              </span>
            </p>
          ) : (
            <p>
              Нет аккаунта?{' '}
              <span
                onClick={() => setState('register')}
                className="text-primary cursor-pointer hover:underline"
              >
                Зарегистрироваться
              </span>
            </p>
          )}
          <Button className="bg-primary hover:bg-indigo-600 transition-all text-white w-full py-2 rounded-md cursor-pointer">
            {state === 'register' ? 'Создать аккаунт' : 'Войти'}
          </Button>
        </form>
      </div>
    )
  );
};

export default Login;
