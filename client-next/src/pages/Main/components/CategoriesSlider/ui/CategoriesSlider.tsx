import { CategoryWithDishes } from "@/entities/Category.ent";
import cl from "./CategoriesSlider.module.css";
import type { FC } from "react";

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
              onClick={() => {
                const el = document.querySelector(
                  `[data-category-id="${item.id}"]`,
                );
                el?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
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
