import { create } from "zustand";

const useLoadingStore = create<LoadingStore>((set) => ({
    isLoading: false,
    loading_message: "",
    setLoadingMessage(msg) {
        set({ loading_message: msg })
    },
    setLoading: (value)=> set({ isLoading: value })
}));

export { useLoadingStore }