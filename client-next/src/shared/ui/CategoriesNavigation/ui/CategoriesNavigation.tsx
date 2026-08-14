"use client";

import { Category } from "@/entities/Category.ent";
import cl from "./CategoriesNavigation.module.css";
import { useEffect, useRef, useState, type FC } from "react";
import { scrollToCategory } from "@/shared/utils/scrollToCategory";

interface Props {
  categories: Category[] | undefined;
}

export const CategoriesNavigation: FC<Props> = ({ categories }) => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

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
    <nav className={cl.categoriesList}>
      {categories.map((cat) => (
        <button
          className={activeId === cat.id ? cl.active : cl.link}
          onClick={() => scrollToCategory(cat.id)}
          key={cat.id}
        >
          {cat.title}
        </button>
      ))}
    </nav>
  );
};
