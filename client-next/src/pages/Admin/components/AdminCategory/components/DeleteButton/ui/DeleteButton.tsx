"use client";

import type { FC } from "react";
import cl from "./DeleteButton.module.css";
import Image from "next/image";

interface Props {
  deleteHandle: () => void;
  className: string;
}

export const DeleteButton: FC<Props> = ({ deleteHandle, className }) => {
  return (
    <button
      type="button"
      className={`${className} ${cl.deleteButton}`}
      onClick={deleteHandle}
    >
      <Image
        src="/svg/delete.svg"
        alt="Удалить"
        width={25}
        height={25}
        loading="eager"
      />
    </button>
  );
};
