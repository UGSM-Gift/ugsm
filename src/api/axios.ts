import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_PUBLIC_BASE_URL,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
