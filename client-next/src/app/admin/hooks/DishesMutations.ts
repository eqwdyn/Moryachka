import { DishesService } from "@/shared/api/DishesService";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateDish = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      formData,
      token,
    }: {
      formData: FormData;
      token: string;
    }) => {
      return await DishesService.create(formData, token);
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
      token,
    }: {
      id: number;
      formData: FormData;
      token: string;
    }) => {
      return await DishesService.update(id, formData, token);
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
    mutationFn: async ({ id, token }: { id: number; token: string }) => {
      await DishesService.remove(id, token);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories-with-dishes"] });
      queryClient.invalidateQueries({
        queryKey: ["categories-with-dishes-filtered"],
      });
    },
  });
};
