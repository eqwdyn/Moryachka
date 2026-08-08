"use client";

import cl from "./BurgerButton.module.css";
import Image from "next/image";

export const BurgerButton = ({}) => {
  const openBurgerMenu = () => {
    console.log("Burger clicked!");
  };
  return (
    <button
      className={cl.menuButton}
      onClick={openBurgerMenu}
      aria-label="Открыть бургер меню"
    >
      <Image src={"/svg/burger-icon.svg"} alt="" width={16} height={16} />
    </button>
  );
};
