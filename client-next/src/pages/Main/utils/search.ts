import { CategoryWithDishes } from "@/entities/Category.ent";

export function search(
  value: string,
  categories: CategoryWithDishes[] | undefined,
): CategoryWithDishes[] {
  if (!value.trim() || !categories || !categories.length)
    return categories ?? [];

  const lower = value.toLowerCase();

  return categories
    .map((category) => ({
      ...category,
      dishes: category.dishes.filter((dish) =>
        dish.title.toLowerCase().includes(lower),
      ),
    }))
    .filter((category) => category.dishes.length > 0);
}
