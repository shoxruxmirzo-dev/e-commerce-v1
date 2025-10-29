import { createContext, useContext, useState, useEffect } from 'react';
import { dummyCart } from './../assets/assets';
import toast from 'react-hot-toast';
import { useProducts } from './ProductsContext';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { products } = useProducts();

  const [cart, setCart] = useState({});
  const [loading, setLoading] = useState(false);

  // Add Product to Cart
  const addToCart = (itemId) => {
    let cartData = structuredClone(cart);

    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }

    setCart(cartData);
    toast.success('Added to Cart');
  };

  // Remove Product 1 count from Cart
  const removeFromCart = (itemId) => {
    let cartData = structuredClone(cart);

    if (cartData[itemId]) {
      cartData[itemId] -= 1;
      if (cartData[itemId] === 0) {
        delete cartData[itemId];
      }
    }

    setCart(cartData);
    toast.success('Removed from Cart');
  };

  // Delete Product from Cart
  const deleteFromCart = (itemId) => {
    let cartData = structuredClone(cart);

    if (cartData[itemId]) {
      delete cartData[itemId];
    }

    setCart(cartData);
    toast.success('Deleted from Cart');
  };

  // Delete All Products from Cart
  const clearCart = () => {
    setCart({});
    toast.success('All Products Deleted from Cart');
  };

  // Get Cart All Products Total Count
  const getCartTotalCount = () => {
    let totalCount = 0;

    for (const key in cart) {
      totalCount += cart[key];
    }

    return totalCount;
  };

  // Get Cart All Products Total Amount
  const getCartTotalAmount = () => {
    let totalAmount = 0;

    for (const key in cart) {
      let cartProduct = products.find((product) => product._id === key);

      if (cart[key] > 0) {
        totalAmount += cartProduct.offerPrice * cart[key];
      }
    }

    return Math.floor(totalAmount * 100) / 100;
  };

  useEffect(() => {
    const fetchCart = async () => {
      setCart(dummyCart);
    };

    fetchCart();
  }, []);

  const value = {
    cart,
    loading,
    addToCart,
    removeFromCart,
    deleteFromCart,
    clearCart,
    getCartTotalCount,
    getCartTotalAmount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
