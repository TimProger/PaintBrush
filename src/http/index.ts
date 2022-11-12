import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { Storage } from "@/utils/storage";

const PORT: number = 3000;

export const API_BASE_URL = "https://";
export const APP_BASE_URL = `http://localhost:${PORT}`;

export const $authHost = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    common: {
      accept: "application/json",
    },
  },
});

export const $api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    common: {
      accept: "application/json",
    },
  },
});

$api.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    if (config.headers) {
      config.headers.Authorization = Storage.get("accessToken");
    }
    return config;
  }
);
$api.interceptors.response.use(
  (config: AxiosResponse): AxiosResponse => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await $authHost.post(
          `${API_BASE_URL}/api_v2/jwt/refresh`
        );
        Storage.set("accessToken", "Bearer " + response.data.access);
        originalRequest.headers.Authorization =
          "Bearer " + response.data.access;
        return $api.request(originalRequest);
      } catch (e) {
        // alert('Ошибка')
        Storage.delete("accessToken");
        window.location.replace("/");
      }
    }
    throw error;
  }
);
