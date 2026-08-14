import { create } from "zustand";

interface AddDishState {
  isOpen: boolean;
  categoryId: number | null;
  close: () => void;
  open: (categoryId: number) => void;
}

export const useAddDishStore = create<AddDishState>((set) => ({
  isOpen: false,
  categoryId: null,
  close: () => set({ isOpen: false, categoryId: null }),
  open: (categoryId) => set({ isOpen: true, categoryId }),
}));
