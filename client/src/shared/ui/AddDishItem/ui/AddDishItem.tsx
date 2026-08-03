import cl from "./AddDishItem.module.css";
import AddIcon from "@assets/svg/plus-circle.svg?react";
import { type FC } from "react";

interface Props {
  openModalHandle: () => void;
}

export const AddDishItem: FC<Props> = ({ openModalHandle }) => {
  return (
    <div className={cl.item}>
      <button className={cl.btn} onClick={openModalHandle}>
        <AddIcon />
      </button>
    </div>
  );
};
