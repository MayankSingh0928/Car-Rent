import axios from 'axios';

const apiBaseURL = process.env.REACT_APP_API_BASE_URL || '';

const api = axios.create({
  baseURL: apiBaseURL,
});

api.interceptors.request.use((config) => {
  if (process.env.NODE_ENV === 'production' && !apiBaseURL) {
    return Promise.reject(new Error('Backend API URL is not configured. Set REACT_APP_API_BASE_URL.'));
  }

  return config;
});

export default api;
