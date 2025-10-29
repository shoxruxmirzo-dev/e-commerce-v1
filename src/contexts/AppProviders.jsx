import { AuthProvider } from './AuthContext';
import { CartProvider } from './CartContext';
import { FavoritesProvider } from './FavoritesContext';
import { ProductsProvider } from './ProductsContext';

export const AppProviders = ({ children }) => (
  <AuthProvider>
    <ProductsProvider>
      <FavoritesProvider>
        <CartProvider>{children}</CartProvider>
      </FavoritesProvider>
    </ProductsProvider>
  </AuthProvider>
);
