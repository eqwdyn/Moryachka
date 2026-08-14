"use client";

import { useBurgerStore } from "@/shared/store/burger.store";
import cl from "./BurgerButton.module.css";
import Image from "next/image";

export const BurgerButton = ({}) => {
  const { open } = useBurgerStore();

  return (
    <>
      <button
        className={cl.menuButton}
        onClick={open}
        aria-label="Открыть бургер меню"
      >
        <Image src={"/svg/burger-icon.svg"} alt="" width={16} height={16} />
      </button>
    </>
  );
};
