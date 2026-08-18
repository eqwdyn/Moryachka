"use client";

import cl from "./AddCategoryItem.module.css";
import Image from "next/image";
import { FC } from "react";

interface Props {
  addHandle: () => void;
}

export const AddCategoryItem: FC<Props> = ({ addHandle }) => {
  return (
    <button className={cl.addButton} onClick={addHandle}>
      {/* <AddIcon /> */}
      <Image
        src="/svg/plus.svg"
        alt="Добавить"
        loading="eager"
        width={50}
        height={50}
      />
      <h2 className={cl.title}>Создать категорию</h2>
    </button>
  );
};
