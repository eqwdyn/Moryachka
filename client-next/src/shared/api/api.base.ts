import { getAccessToken } from "@/shared/utils/getAccessToken";
import axios from "axios";

export const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API}/api`,
});

// export const adminApi = axios.create({
//   baseURL: `${process.env.NEXT_PUBLIC_API}/api`,
// });

// adminApi.interceptors.request.use((config) => {
//   const token = getAccessToken();
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });
