import { CategoryWithDishes } from "@/entities/Category.ent";
import cl from "./CategoriesSlider.module.css";
import type { FC } from "react";
import { scrollToCategory } from "@/shared/utils/scrollToCategory";

interface Props {
  items: CategoryWithDishes[];
}

export const CategoriesSlider: FC<Props> = ({ items }) => {
  return (
    <section className={cl.container}>
      <div className={cl.content}>
        <nav className={cl.items}>
          {items.map((item) => (
            <button
              className={cl.item}
              onClick={() => scrollToCategory(item.id)}
              key={item.id}
            >
              {item.title}
            </button>
          ))}
        </nav>
      </div>
    </section>
  );
};
