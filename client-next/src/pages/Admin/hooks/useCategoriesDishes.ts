import { CategoriesService } from "@/shared/api/CategoriesService";
import { useQuery } from "@tanstack/react-query";

export function useCategoriesDishes() {
  return useQuery({
    queryKey: ["categories-with-dishes"],
    queryFn: async () => {
      const items = await CategoriesService.findAllWithDishes();
      return items;
    },
    staleTime: 10 * 60 * 1000,
    retry: 2,
  });
}
