import { type FC } from "react";
import cl from "./ContentContainer.module.css";

interface Props {
  children: React.ReactNode;
}

export const ContentContainer: FC<Props> = ({ children }) => {
  return <div className={cl.container}>{children}</div>;
};
