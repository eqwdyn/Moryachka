import { Dish } from "@/entities/Dish.ent";
import { create } from "zustand";

interface AccessTokenState {
  token: string | null;
  setToken: (val: string) => void;
}

export const useAccessToken = create<AccessTokenState>((set) => ({
  token: null,
  setToken: (newToken) => set({ token: newToken }),
}));
