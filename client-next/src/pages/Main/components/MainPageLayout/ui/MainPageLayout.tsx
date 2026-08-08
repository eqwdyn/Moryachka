import { FC, PropsWithChildren } from "react";
import cl from "./MainPageLayout.module.css";

const MainPageLayoutRoot: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className={cl.layout}>{children}</div>
    </>
  );
};

const Header = ({ children }: { children: React.ReactNode }) => {
  return <div className={cl.header}>{children}</div>;
};

const Categories = ({ children }: { children: React.ReactNode }) => {
  return <div className={cl.categories}>{children}</div>;
};

const Menu = ({ children }: { children: React.ReactNode }) => {
  return <div className={cl.menu}>{children}</div>;
};

export const MainPageLayout = Object.assign(MainPageLayoutRoot, {
  Categories,
  Menu,
  Header,
});
