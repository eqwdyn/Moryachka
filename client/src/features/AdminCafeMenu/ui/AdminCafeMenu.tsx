import { AdminCategory } from "@features/AdminCategory";
import { useState, type FC } from "react";
import { type CategoryWithDishes } from "@entities/Category.ent";
import { AddCategoryItem } from "@shared/ui/AddCategoryItem";
import { CreateCategoryModal } from "@features/CreateCategoryModal";
import { CreateDishModal } from "@features/CreateDishModal";
import type { Dish } from "@entities/Dish.ent";
import { RedactDishModal } from "@features/RedactDishModal";
import cl from "./AdminCafeMenu.module.css";
// import { BackFallDishes } from "@widgets/BackFallDishes";

interface Props {
  items: CategoryWithDishes[] | undefined;
}

export const AdminCafeMenu: FC<Props> = ({ items }) => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState<boolean>(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null,
  );
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

  if (!items || !items.length)
    return (
      <section className={cl.container}>
        <AddCategoryItem onClickHandle={() => setIsCategoriesOpen(true)} />

        <CreateCategoryModal
          isOpen={isCategoriesOpen}
          setIsOpen={setIsCategoriesOpen}
        />

        <CreateDishModal
          isOpen={selectedCategoryId !== null}
          setIsOpen={(val) => {
            if (!val) setSelectedCategoryId(null);
          }}
          categoryId={selectedCategoryId!}
        />
        <RedactDishModal
          isOpen={selectedDish !== null}
          setIsOpen={(val) => {
            if (!val) setSelectedDish(null);
          }}
          dish={selectedDish ?? ({} as Dish)}
        />
      </section>
    );

  return (
    <section className={cl.container}>
      <AddCategoryItem onClickHandle={() => setIsCategoriesOpen(true)} />

      {items.map((item) => (
        <AdminCategory
          item={item}
          dishes={item.dishes}
          key={item.id}
          openCreateDishModalHandle={() => setSelectedCategoryId(item.id)}
          openRedactDishModal={(dish: Dish) => setSelectedDish(dish)}
        />
      ))}

      <CreateCategoryModal
        isOpen={isCategoriesOpen}
        setIsOpen={setIsCategoriesOpen}
      />

      <CreateDishModal
        isOpen={selectedCategoryId !== null}
        setIsOpen={(val) => {
          if (!val) setSelectedCategoryId(null);
        }}
        categoryId={selectedCategoryId!}
      />
      <RedactDishModal
        isOpen={selectedDish !== null}
        setIsOpen={(val) => {
          if (!val) setSelectedDish(null);
        }}
        dish={selectedDish ?? ({} as Dish)}
      />
    </section>
  );
};
