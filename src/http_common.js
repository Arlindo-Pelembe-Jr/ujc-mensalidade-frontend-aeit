import axios from 'axios';
const axiosInstance = axios.create({

  baseURL: 'http://localhost:8080/ujc-mensalidade/api/v1',
  headers: {
    'Content-type': 'application/json',
  },
});
axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('validToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);
export default axiosInstance;