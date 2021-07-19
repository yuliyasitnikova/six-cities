import axios from 'axios';
import {API_URL, REQUEST_TIMEOUT} from './const';

const token = localStorage.getItem('token') ?? '';

export const createAPI = () => {
  const api = axios.create({
    baseURL: API_URL,
    timeout: REQUEST_TIMEOUT,
    headers: {
      'x-token': token,
    },
  });

  return api;
};
