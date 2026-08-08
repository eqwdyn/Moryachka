import { DishItem } from "@/pages/Main/components/DishItem";
import cl from "./DishesList.module.css";
import { type FC } from "react";
import { Dish } from "@/entities/Dish.ent";

interface Props {
  items: Dish[];
  imageLoading: "eager" | "lazy";
}

export const DishesList: FC<Props> = ({ items, imageLoading }) => {
  return (
    <ul className={cl.list}>
      {items.map((item) => (
        <li className={cl.item} key={item.id}>
          <DishItem item={item} imageLoading={imageLoading} />
        </li>
      ))}
    </ul>
  );
};
