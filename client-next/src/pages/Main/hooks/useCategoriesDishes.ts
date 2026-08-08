import { CategoryWithDishes } from "@/entities/Category.ent";
import { api } from "@/shared/api/api.base";
import { useQuery } from "@tanstack/react-query";

export function useFilteredCategoriesDishes() {
  return useQuery({
    queryKey: ["categories-with-dishes-filtered"],
    queryFn: async () => {
      const { data } = await api.get<CategoryWithDishes[]>(`categories/dishes`);
      const filteredItems = data.filter((item) => {
        if (!item.dishes.length) return false;

        return true;
      });
      return filteredItems;
    },
    staleTime: 10 * 60 * 1000,
    retry: 2,
  });
}
