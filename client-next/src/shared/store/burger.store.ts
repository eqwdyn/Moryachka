import { create } from "zustand";

interface BurgerState {
  isOpen: boolean;
  close: () => void;
  open: () => void;
}

export const useBurgerStore = create<BurgerState>((set) => ({
  isOpen: false,
  close: () => set({ isOpen: false }),
  open: () => set({ isOpen: true }),
}));
