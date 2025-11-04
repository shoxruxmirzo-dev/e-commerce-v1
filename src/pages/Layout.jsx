import { Outlet } from 'react-router';

import Header from '../components/Header';
import Footer from '../components/Footer';
import BottomBar from '../components/mobile/BottomBar';
import TopBar from '../components/mobile/TopBar';
import Catalog from '../components/mobile/Catalog';
import Settings from '../components/mobile/Settings';
import Login from '../components/Login';

const Layout = () => {
  return (
    <div>
      <Catalog />
      <Settings />
      <Login />
      <TopBar />

      <Header />
      <main className="container-wrapper flex-1">
        <Outlet />
      </main>
      <Footer />

      <BottomBar />
    </div>
  );
};

export default Layout;
