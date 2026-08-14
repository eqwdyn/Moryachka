import { FC, PropsWithChildren } from "react";
import cl from "./PageLayout.module.css";

const PageLayoutRoot: FC<PropsWithChildren> = ({ children }) => {
  return <div className={cl.contentContainer}>{children}</div>;
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className={cl.layout}>{children}</div>;
};

const Header = ({ children }: { children: React.ReactNode }) => {
  return <div className={cl.header}>{children}</div>;
};

const Categories = ({ children }: { children: React.ReactNode }) => {
  return <section className={cl.categories}>{children}</section>;
};

const Menu = ({ children }: { children: React.ReactNode }) => {
  return <section className={cl.menu}>{children}</section>;
};

export const PageLayout = Object.assign(PageLayoutRoot, {
  Layout,
  Categories,
  Menu,
  Header,
});
