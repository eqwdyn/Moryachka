"use client";

import { Category } from "@/entities/Category.ent";
import cl from "./CategoriesNavigation.module.css";
import { useEffect, useRef, useState, type FC } from "react";
import { CategoryButtonRef } from "@/pages/Main/components/CategoryButtonRef";

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

  const scrollToCategory = (categoryId: number) => {
    const el = document.querySelector(`[data-category-id="${categoryId}"]`);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (!categories || categories.length === 0) return null;

  return (
    <nav className={cl.categoriesList}>
      {categories.map((cat) => (
        <CategoryButtonRef
          key={cat.id}
          isActive={activeId === cat.id}
          onClick={() => scrollToCategory(cat.id)}
        >
          {cat.title}
        </CategoryButtonRef>
      ))}
    </nav>
  );
};
