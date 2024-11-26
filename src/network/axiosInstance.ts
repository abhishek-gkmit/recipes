import axios, { AxiosError, CreateAxiosDefaults } from 'axios';

import { handleError } from './errorHandler';

const instanceConfig: CreateAxiosDefaults = {};

export const axiosInstance = axios.create(instanceConfig);

axiosInstance.interceptors.response.use(
  null,
  function onError(error: AxiosError) {
    return handleError(error);
  },
);
