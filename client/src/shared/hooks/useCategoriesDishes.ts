import { CategoriesRepo } from "@shared/api/Categories.repo";
import { useQuery } from "@tanstack/react-query";

export function useFilteredCategoriesDishes() {
  return useQuery({
    queryKey: ["categories-with-dishes-filtered"],
    queryFn: async () => {
      const items = await CategoriesRepo.findAllWithDishes();
      const filteredItems = items.filter((item) => {
        if (!item.dishes.length) return false;

        return true;
      });
      return filteredItems;
    },
    staleTime: 10 * 60 * 1000,
    retry: 2,
  });
}

export function useCategoriesDishes() {
  return useQuery({
    queryKey: ["categories-with-dishes"],
    queryFn: async () => {
      const items = await CategoriesRepo.findAllWithDishes();
      return items;
    },
    staleTime: 10 * 60 * 1000,
    retry: 2,
  });
}
