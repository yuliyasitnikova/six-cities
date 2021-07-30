import axios from 'axios';
import {API_URL, REQUEST_TIMEOUT} from './const';

const HttpCode = {
  UNAUTHORIZED: 401,
};

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: API_URL,
    timeout: REQUEST_TIMEOUT,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    if (response.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();
    }

    throw err;
  };

  api.interceptors.request.use((config) => {
    config.headers['x-token'] = localStorage.getItem('token') ?? '';

    return config;
  });

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
