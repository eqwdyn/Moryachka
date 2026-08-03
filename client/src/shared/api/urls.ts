// const envUrl = import.meta.env.VITE_API_URL;
// export const SERVER_URL =
//   envUrl ?? ("https://obscenely-opulent-guineapig.cloudpub.ru" as const);

export const SERVER_URL = "http://localhost:7000" as const;

// export const SERVER_URL = "/api" ;

export const YA_MAPS_KEY = "6e7c1fa7-90f7-48ed-ac37-0abb3f7a8295" as const;
export const YA_MAPS_URL = `https://api-maps.yandex.ru/3.0/?apikey=${YA_MAPS_KEY}&lang=en_RU`;

export const CATEGORIES_API_URL = "/categories" as const;
export const DISHES_API_URL = "/dishes" as const;
export const LOGIN_API_URL = "/auth/login" as const;
export const CHECK_AUTH_API_URL = "/auth/check" as const;
export const STATIC_URL = `${SERVER_URL}/uploads` as const;
