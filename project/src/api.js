import axios from 'axios';
import {API_URL, REQUEST_TIMEOUT} from './const';

export const createAPI = () => {
  const api = axios.create({
    baseURL: API_URL,
    timeout: REQUEST_TIMEOUT,
  });

  return api;
};
