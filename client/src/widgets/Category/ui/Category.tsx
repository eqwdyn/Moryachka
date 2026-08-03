import type { FC } from "react";
import cl from "./Category.module.css";
import type { Category as CategoryEnt } from "@entities/Category.ent";
import type { Dish } from "@entities/Dish.ent";
import { DishesList } from "@shared/ui/DishesList";

interface Props {
  item: CategoryEnt;
  dishes: Dish[];
}

export const Category: FC<Props> = ({ item, dishes }) => {
  return (
    <article className={cl.container} data-category-id={item.id}>
      <h2 className={cl.title}>{item.title}</h2>
      <DishesList items={dishes} />
    </article>
  );
};
