import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.example.com',
  withCredentials: true,
});

export default axiosInstance;
