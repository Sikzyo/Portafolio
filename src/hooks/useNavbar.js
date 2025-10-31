import { create } from "zustand";

const useNavbar = create((set) => ({
  isOpen: false,
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
  closeMenu: () => set({ isOpen: false }),

  item: 0,
  setItem: (index) => set({ item: index }),

  isSelect: { width: 0, left: 0 },
  setSelect: (select) => set({ isSelect: select }),
}));

export default useNavbar;
