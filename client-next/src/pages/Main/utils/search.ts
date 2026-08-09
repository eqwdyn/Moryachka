import { CategoryWithDishes } from "@/entities/Category.ent";
import { filterEmptyCategories } from "@/pages/Main/utils/filterEmptyCategories";

interface SearchProps {
  query: string;
  categories: CategoryWithDishes[] | undefined;
}

export function search({
  query,
  categories,
}: SearchProps): CategoryWithDishes[] {
  const trimmedQuery = query.trim();
  if (!trimmedQuery || !categories || !categories.length)
    return categories ?? [];

  const lower = trimmedQuery.toLowerCase();
  const filtered = removeNotIncludedTitle(lower, categories);

  return filterEmptyCategories(filtered);
}

function removeNotIncludedTitle(
  query: string,
  categories: CategoryWithDishes[],
): CategoryWithDishes[] {
  return categories.map((category) => ({
    ...category,
    dishes: category.dishes.filter((dish) =>
      dish.title.toLowerCase().includes(query),
    ),
  }));
}
