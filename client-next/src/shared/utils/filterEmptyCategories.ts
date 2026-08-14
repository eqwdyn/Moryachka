import { CategoryWithDishes } from "@/entities/Category.ent";

export function filterEmptyCategories(categories: CategoryWithDishes[]) {
  const filteredItems = categories.filter((item) => {
    if (!item.dishes?.length) return false;

    return true;
  });
  return filteredItems;
}
