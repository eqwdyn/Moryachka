import type { FC, PropsWithChildren } from "react";
import cl from "./LoaderGate.module.css";

interface Props extends PropsWithChildren {
  isLoading: boolean;
  loaderSlot?: React.ReactNode;
}

export const LoaderGate: FC<Props> = ({ isLoading, loaderSlot, children }) => {
  if (isLoading) {
    return loaderSlot ?? <div>Загрузка...</div>;
  }

  return children;
};
