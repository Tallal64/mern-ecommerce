import { create } from "zustand";

type useThemeProps = {
  isDarkMode: boolean;
  setTheme: () => void;
};

export const useTheme = create<useThemeProps>((set) => ({
  isDarkMode: false,
  setTheme: () => {
    set((state) => ({ isDarkMode: !state.isDarkMode }));
  },
}));
