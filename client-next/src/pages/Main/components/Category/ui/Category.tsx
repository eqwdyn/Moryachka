import type { FC } from "react";
import cl from "./Category.module.css";
import { CategoryWithDishes } from "@/entities/Category.ent";
import { DishesList } from "@/pages/Main/components/DishesList";

interface Props {
  item: CategoryWithDishes;
  dishesImageLoading: "eager" | "lazy";
}

export const Category: FC<Props> = ({ item, dishesImageLoading }) => {
  return (
    <article className={cl.container} data-category-id={item.id}>
      <h2 className={cl.title}>{item.title}</h2>
      <DishesList items={item.dishes} imageLoading={dishesImageLoading} />
    </article>
  );
};
