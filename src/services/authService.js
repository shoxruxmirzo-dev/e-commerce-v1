import axios from '../utils/axiosInstance';

export const signUp = async (name, email, password) => {
  const { data } = await axios.post('/auth/signup', { name, email, password });
  return data;
};

export const signIn = async (email, password) => {
  const { data } = await axios.post('/auth/signin', { email, password });
  return data;
};

export const logout = async () => {
  const { data } = await axios.post('/auth/logout');
  return data;
};

export const isAuth = async () => {
  const { data } = await axios.get('/auth/is-auth');
  return data;
};
