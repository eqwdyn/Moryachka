import type { Dish } from "@entities/Dish.ent";
import cl from "./DishesList.module.css";
import { type FC } from "react";
import { AdminDishItem } from "@features/AdminDishItem";
import { DishItem } from "@shared/ui/DishItem";
import { AddDishItem } from "@shared/ui/AddDishItem";

interface Props {
  items: Dish[];
  type?: "user" | "admin";
  openCreateDishModalHandle?: () => void;
  openRedactDishModal?: (dish: Dish) => void;
}

export const DishesList: FC<Props> = ({
  items,
  type = "user",
  openCreateDishModalHandle,
  openRedactDishModal,
}) => {
  return (
    <ul className={cl.list}>
      {items.map((item) => (
        <li className={cl.item} key={item.id}>
          {type === "user" ? (
            <DishItem item={item} />
          ) : (
            <AdminDishItem item={item} openRedactModal={openRedactDishModal!} />
          )}
        </li>
      ))}
      {type === "admin" ? (
        <>
          <AddDishItem openModalHandle={openCreateDishModalHandle!} />
        </>
      ) : null}
    </ul>
  );
};
