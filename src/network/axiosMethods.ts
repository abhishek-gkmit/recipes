import { axiosInstance } from './axiosInstance';

export async function _get(endpoint: string, params?: any) {
  return await axiosInstance.get(endpoint, { params });
}

export async function _post(endpoint: string, body: any) {
  return await axiosInstance.post(endpoint, body);
}

export async function _put(endpoint: string, body: any) {
  return await axiosInstance.put(endpoint, body);
}
