import type { FC } from "react";
import cl from "./AddCategoryItem.module.css";
import AddIcon from "@assets/svg/plus-circle.svg?react";

interface Props {
  onClickHandle: () => void;
}

export const AddCategoryItem: FC<Props> = ({ onClickHandle }) => {
  return (
    <article className={cl.container}>
      <button className={cl.addButton} onClick={onClickHandle}>
        <AddIcon />
      </button>
      <h2 className={cl.title}>Создать категорию</h2>
    </article>
  );
};
