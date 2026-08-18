import { SERVER_URL_SSR } from "@/shared/config/apiPaths";
import axios from "axios";

export const apiSSR = axios.create({
  baseURL: SERVER_URL_SSR,
});
export const apiCSR = axios.create({
  //   baseURL: SERVER_URL_CSR,
  baseURL: `/api`,
});
