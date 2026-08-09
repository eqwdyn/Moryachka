"use client";

import type { FC, PropsWithChildren } from "react";
import cl from "./CategoryButtonRef.module.css";

interface Props extends PropsWithChildren {
  isActive: boolean;
  onClick: () => void;
}

export const CategoryButtonRef: FC<Props> = ({
  isActive,
  onClick,
  children,
}) => {
  return (
    <button className={isActive ? cl.active : cl.link} onClick={onClick}>
      {children}
    </button>
  );
};
