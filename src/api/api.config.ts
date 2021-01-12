import { AxiosRequestConfig } from "axios";

export const apiConfig: AxiosRequestConfig = {
  withCredentials: true,
  timeout: 30000,
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    common: {
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  },
}