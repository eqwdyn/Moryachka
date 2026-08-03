import { Category } from "@widgets/Category";
import { type FC } from "react";
import type { CategoryWithDishes } from "@entities/Category.ent";
import cl from "./CafeMenu.module.css";
import { BackFallDishes } from "@widgets/BackFallDishes";

interface Props {
  items: CategoryWithDishes[] | undefined;
}

export const CafeMenu: FC<Props> = ({ items }) => {
  return items && items.length ? (
    <section>
      {items?.map((item) => (
        <Category item={item} dishes={item.dishes} key={item.id} />
      ))}
    </section>
  ) : (
    <div className={cl.backFallContainer}>
      <BackFallDishes />
    </div>
  );
};
