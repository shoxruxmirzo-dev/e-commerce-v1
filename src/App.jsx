import { Route, Routes } from 'react-router';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './contexts/AuthContext';

import Layout from './pages/Layout';
import Home from './pages/Home';
import CategoryProducts from './pages/CategoryProducts';
import SearchProducts from './pages/SearchProducts';
import ProductDetails from './pages/ProductDetails';
import Favorites from './pages/Favorites';
import Cart from './pages/Cart';
import Orders from './pages/user/Orders';
import Profile from './pages/user/Profile';

function App() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex flex-col max-lg:pb-[57px]">
      <Toaster position="top-right" />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="category/:category_name_id" element={<CategoryProducts />} />
          <Route path="search" element={<SearchProducts />} />
          <Route path="product/:product_name_id" element={<ProductDetails />} />
          <Route path="cart" element={<Cart />} />
          <Route path="favorites" element={<Favorites />} />
          <Route index path="user/orders" element={user ? <Orders /> : null} />
          <Route path="user/profile" element={user ? <Profile /> : null} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
