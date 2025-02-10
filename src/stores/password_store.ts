import { create } from "zustand";

const usePasswordStore = create<PasswordViewStore>((set) => ({
  show: false,
  onClick: (value) => set(() => ({ show: value })),
}));

const repeatUsePasswordStore = create<PasswordViewStore>((set) => ({
  show: false,
  onClick: (value) => set(() => ({ show: value })),
}));

export { usePasswordStore, repeatUsePasswordStore };
