import { SERVER_URL } from "./urls";
import axios from "axios";

export interface IApiResponse<T> {
  status: string;
  message: string;
  data: T;
}

export const api = axios.create({
  baseURL: SERVER_URL,
});

export const adminApi = axios.create({
  baseURL: SERVER_URL,
});

adminApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("admin_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
