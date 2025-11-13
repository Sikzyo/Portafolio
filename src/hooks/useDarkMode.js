import { create } from "zustand";

const useDarkMode = create((set) => ({
  theme: "",

  toggleDarkMode: () => set((state) => ({ theme: !state.theme })),
  setTheme: (theme) => set({ theme: theme }),
}));

export default useDarkMode;
