import { useEffect } from "react";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import useDarkMode from "../hooks/useDarkMode.js";

export default function darkModeToggle() {
  const setTheme = useDarkMode((state) => state.setTheme);
  const theme = useDarkMode((state) => state.theme);

  useEffect(() => {
    const isDark = localStorage.theme || "light";
    setTheme(isDark);
    document.documentElement.classList.toggle("dark", isDark === "dark");
  }, []);

  const toggleDarkMode = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.theme = newTheme;
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    setTheme(newTheme);
  };

  return (
    <button
      className="relative w-11 h-11 flex justify-center items-center bg-white-orange dark:bg-dark-purple text-white-button dark:text-dark-button rounded-lg"
      onClick={() => {
        toggleDarkMode();
      }}
    >
      <SunIcon
        className={`absolute transition-all duration-300 ease-in-out ${
          theme === "light" ? "opacity-0 scale-0" : "opacity-100 scale-100"
        } `}
      />
      <MoonIcon
        className={`absolute transition-all duration-300 ease-in-out ${
          theme !== "light" ? "opacity-0 scale-0" : "opacity-100 scale-100"
        } `}
      />
    </button>
  );
}
