import { create } from "zustand";

interface IUseStore {}

export const useStore = create<IUseStore>()((set) => ({}));
