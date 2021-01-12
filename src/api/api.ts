import { TStore } from './../contexts/store-context';
import axios, { AxiosRequestConfig } from 'axios';

import { apiConfig } from './api.config';
import { storageKey } from "../config/storeConfig";

const axiosInstance = axios.create(apiConfig);

axiosInstance.interceptors.request.use((config) => {
  const token = getToken();
  const hasToken = !!token;
  const headerAuthorization
    = hasToken
    ? { "Authorization": `Bearer ${token}` }
    : {};

  return {
    ...config,
    headers: {
      ...config.headers,
      ...headerAuthorization,
    },
  }
});

axiosInstance.interceptors.response.use((params) => {
  // Add something if needed

  return {
      ...params
  }
}, (error) => {
  return Promise.reject(error.response);
});

export const getToken = () => {
  let returnData: string | undefined;
  if (typeof window === "undefined") return returnData;

  const storeData = localStorage.getItem(storageKey);

  if (storeData) {
    const store: TStore = JSON.parse(storeData);
    returnData = store.authStore?.currentAuth?.token;
  }

  return returnData;
}

export async function get<T>(
  path: string,
  config?: AxiosRequestConfig | undefined
): Promise<T> {
  const { data } = await axiosInstance.get(path, config);
  return data;
};

export async function post<T>(
  path: string,
  reqData?: any,
  config?: AxiosRequestConfig | undefined
): Promise<T> {
  const { data } = await axiosInstance.post(path, reqData, config);
  return data;
};

export async function patch<T>(
  path: string,
  reqData?: any,
  config?: AxiosRequestConfig | undefined
): Promise<T> {
  const { data } = await axiosInstance.patch(path, reqData, config);
  return data;
};

export async function put<T>(
  path: string,
  reqData?: any,
  config?: AxiosRequestConfig | undefined
): Promise<T> {
  const { data } = await axiosInstance.put(path, reqData, config);
  return data;
};

export async function del<T>(
  path: string,
  config?: AxiosRequestConfig | undefined
): Promise<T> {
  const { data } = await axiosInstance.delete(path, config);
  return data;
};

export const API = {
  get,
  post,
  patch,
  put,
  del,
};