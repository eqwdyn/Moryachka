import cl from "./CategoriesBar.module.css";
import { useEffect, useRef, useState, type FC } from "react";
import type { CategoryWithDishes } from "@entities/Category.ent";

interface Props {
  categories: CategoryWithDishes[] | undefined;
}

export const CategoriesBar: FC<Props> = ({ categories }) => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {}, [categories]);

  useEffect(() => {
    setActiveId(null);
    observerRef.current = null;

    if (!categories?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const firstVisible = entries.find((e) => e.isIntersecting);
        if (firstVisible) {
          const idStr = firstVisible.target.getAttribute("data-category-id");
          if (idStr !== null) {
            const id = Number(idStr);
            if (!Number.isNaN(id) && categories.some((c) => c.id === id)) {
              setActiveId(id);
            }
          }
        }
      },
      { threshold: 0.3 },
    );

    observerRef.current = observer;

    const targets = document.querySelectorAll("[data-category-id]");
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [categories]);

  if (!categories || categories.length === 0) return null;

  return (
    <nav className={cl.menu}>
      <ul className={cl.list}>
        {categories.map((cat) => (
          <li key={cat.id} className={cl.item}>
            <button
              className={activeId === cat.id ? cl.active : cl.link}
              onClick={() => {
                const el = document.querySelector(
                  `[data-category-id="${cat.id}"]`,
                );
                el?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              {cat.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
