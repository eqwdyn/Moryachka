// export const SERVER_URL =
//   process.env.NODE_ENV === "production"
//     ? process.env.SERVER_URL
//       ? process.env.SERVER_URL
//       : process.env.NEXT_PUBLIC_API
//     : process.env.NEXT_PUBLIC_API;
export const SERVER_URL_SSR = process.env.BACKEND_URL;
export const SERVER_URL_CSR = process.env.NEXT_PUBLIC_API;
export const CATEGORIES_API_PATH = "/categories" as const;
export const DISHES_API_PATH = "/dishes" as const;
export const LOGIN_API_PATH = "/auth/login" as const;
export const CHECK_AUTH_API_PATH = "/auth/check" as const;
