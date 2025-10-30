import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [selectedLink, setSelectedLink] = useState(null);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [showUserCabinet, setShowUserCabinet] = useState(false);

  const handleSignUp = async (name, email, password) => {
    setUser({ name, email, password });
  };

  const handleSignIn = async (email, password) => {
    setUser({ email, password });
  };

  const handleLogout = () => {
    setUser(null);
  };

  useEffect(() => {
    const fetchUser = async () => {
      setUser(false);
    };

    fetchUser();
  }, []);

  const value = {
    user,
    setUser,
    selectedLink,
    setSelectedLink,
    showUserLogin,
    setShowUserLogin,
    showUserCabinet,
    setShowUserCabinet,
    handleSignUp,
    handleSignIn,
    handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
