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

  useClickAway(ref, () => {
    setShowUserLogin(false);
  });

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
      <div className="fixed inset-0 z-20 flex items-center bg-black/50 text-gray-600 text-sm">
        <form
          onSubmit={handleSubmit}
          ref={ref}
          className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] text-gray-500 rounded-lg shadow-xl border border-gray-200 bg-white"
        >
          <p className="text-2xl font-medium m-auto">
            <span className="text-primary">User</span> {state === 'login' ? 'Login' : 'Sign Up'}
          </p>
          {state === 'register' && (
            <div className="w-full">
              <p>Name</p>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="type here"
                className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
                type="text"
                required
              />
            </div>
          )}
          <div className="w-full ">
            <p>Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="type here"
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
              type="email"
              required
            />
          </div>
          <div className="w-full ">
            <p>Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="type here"
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
              type="password"
              required
            />
          </div>
          {state === 'register' ? (
            <p>
              Already have account?{' '}
              <span onClick={() => setState('login')} className="text-primary cursor-pointer">
                click here
              </span>
            </p>
          ) : (
            <p>
              Create an account?{' '}
              <span onClick={() => setState('register')} className="text-primary cursor-pointer">
                click here
              </span>
            </p>
          )}
          <Button className="bg-primary hover:bg-indigo-600 transition-all text-white w-full py-2 rounded-md cursor-pointer">
            {state === 'register' ? 'Create Account' : 'Login'}
          </Button>
        </form>
      </div>
    )
  );
};

export default Login;
