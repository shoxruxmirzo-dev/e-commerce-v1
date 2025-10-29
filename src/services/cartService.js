import axios from '../utils/axiosInstance';

export const getCart = async () => {
  const { data } = await axios.get('/cart');
  return data;
};

export const addToCart = async (productId, quantity = 1) => {
  const { data } = await axios.post('/cart', { productId, quantity });
  return data;
};

export const removeFromCart = async (productId) => {
  const { data } = await axios.delete(`/cart/${productId}`);
  return data;
};
