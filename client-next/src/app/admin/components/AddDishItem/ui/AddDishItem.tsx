import Image from "next/image";
import cl from "./AddDishItem.module.css";
import { type FC } from "react";

interface Props {
  openModalHandle: () => void;
}

export const AddDishItem: FC<Props> = ({ openModalHandle }) => {
  return (
    <div className={cl.item}>
      <button className={cl.btn} onClick={openModalHandle}>
        <Image
          src="/svg/plus.svg"
          alt="Добавить"
          width={80}
          height={80}
          className={cl.image}
          loading="eager"
        />
      </button>
    </div>
  );
};
