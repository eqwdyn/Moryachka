import type { Category } from "@entities/Category.ent";
import { CategoriesRepo } from "@shared/api/Categories.repo";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (title: string) => {
      return await CategoriesRepo.create(title);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories-with-dishes"] });
      queryClient.invalidateQueries({
        queryKey: ["categories-with-dishes-filtered"],
      });
    },
  });
};

export const useUpdateCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
      title,
    }: {
      id: number;
      title: string;
    }): Promise<Category> => {
      return await CategoriesRepo.update(id, title);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories-with-dishes"] });
      queryClient.invalidateQueries({
        queryKey: ["categories-with-dishes-filtered"],
      });
    },
  });
};

export const useDeleteCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => {
      await CategoriesRepo.remove(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories-with-dishes"] });
      queryClient.invalidateQueries({
        queryKey: ["categories-with-dishes-filtered"],
      });
    },
  });
};
