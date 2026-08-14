"use client";

import type { FC } from "react";
import cl from "./DeleteButton.module.css";
import Image from "next/image";

interface Props {
  deleteHandle: () => void;
}

export const DeleteButton: FC<Props> = ({ deleteHandle }) => {
  return (
    <button className={cl.button} onClick={deleteHandle}>
      {/* <DeleteIcon /> */}
      <Image
        src="/svg/delete.svg"
        width={25}
        height={25}
        alt="Удалить"
        loading="eager"
      />
    </button>
  );
};
