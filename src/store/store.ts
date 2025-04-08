import { create } from "zustand";

interface IUseStore {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

export const useStore = create<IUseStore>()((set) => ({
  isLoading: true,
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
}));
