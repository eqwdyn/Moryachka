import { Category } from "@/entities/Category.ent";
import { CategoriesService } from "@/shared/api/CategoriesService";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ title, token }: { title: string; token: string }) => {
      return await CategoriesService.create(title, token);
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
      token,
    }: {
      id: number;
      title: string;
      token: string;
    }): Promise<Category> => {
      return await CategoriesService.update({ id, title, token });
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
    mutationFn: async ({ id, token }: { id: number; token: string }) => {
      await CategoriesService.remove(id, token);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories-with-dishes"] });
      queryClient.invalidateQueries({
        queryKey: ["categories-with-dishes-filtered"],
      });
    },
  });
};
