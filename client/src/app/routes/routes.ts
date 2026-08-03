import { AboutUs } from "@pages/AboutUs";
import { AdminPanel } from "@pages/AdminPanel";
import { Login } from "@pages/Login";
import { Main } from "@pages/Main";
import type { FC } from "react";

interface Path {
  path: string;
  element: FC;
}

export const ROUTES = {
  home: "/",
  login: "/login",
  adminPanel: "/admin",
  aboutUs: "/about-us",
} as const;

export const paths: Path[] = [
  {
    path: ROUTES.home,
    element: Main,
  },
  {
    path: ROUTES.login,
    element: Login,
  },
  {
    path: ROUTES.aboutUs,
    element: AboutUs,
  },
];

export const privatePaths: Path[] = [
  {
    path: ROUTES.adminPanel,
    element: AdminPanel,
  },
];
