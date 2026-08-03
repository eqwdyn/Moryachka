import { DishesRepo } from "@shared/api/Dishes.repo";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateDish = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (formData: FormData) => {
      return await DishesRepo.create(formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories-with-dishes"] });
      queryClient.invalidateQueries({
        queryKey: ["categories-with-dishes-filtered"],
      });
    },
  });
};

export const useUpdateDish = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
      formData,
    }: {
      id: number;
      formData: FormData;
    }) => {
      return await DishesRepo.update(id, formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories-with-dishes"] });
      queryClient.invalidateQueries({
        queryKey: ["categories-with-dishes-filtered"],
      });
    },
  });
};

export const useDeleteDish = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => {
      await DishesRepo.remove(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories-with-dishes"] });
      queryClient.invalidateQueries({
        queryKey: ["categories-with-dishes-filtered"],
      });
    },
  });
};
