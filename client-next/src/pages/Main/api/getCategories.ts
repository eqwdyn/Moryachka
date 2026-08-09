import { CategoryWithDishes } from "@/entities/Category.ent";
import { api } from "@/shared/api/api.base";

export async function getCategories() {
  const { data } = await api.get<CategoryWithDishes[]>("categories/dishes");
  return data;
}

// export async function searchCategories(query: string) {
//   const { data } = await api.get<CategoryWithDishes[]>(
//     `categories/search?query=${query}`,
//   );
//   return data;
// }
