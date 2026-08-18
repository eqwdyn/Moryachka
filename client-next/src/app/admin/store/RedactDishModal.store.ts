import { Dish } from "@/entities/Dish.ent";
import { create } from "zustand";

interface RedactDishState {
  isOpen: boolean;
  curItem: Dish | null;
  close: () => void;
  open: (item: Dish) => void;
}

export const useRedactDishStore = create<RedactDishState>((set) => ({
  isOpen: false,
  curItem: null,
  close: () => set({ isOpen: false }),
  open: (item: Dish) => set({ isOpen: true, curItem: item }),
}));
