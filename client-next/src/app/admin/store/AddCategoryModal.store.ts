import { create } from "zustand";

interface AddCategoryState {
  isOpen: boolean;
  close: () => void;
  open: () => void;
}

export const useAddCategoryStore = create<AddCategoryState>((set) => ({
  isOpen: false,
  close: () => set({ isOpen: false }),
  open: () => set({ isOpen: true }),
}));
