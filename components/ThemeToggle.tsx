"use client";

import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/contexts";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="border-dark-200 text-dark-600 hover:bg-dark-50 hover:text-primary-600 focus:ring-primary-500 dark:border-dark-700 dark:bg-dark-800 dark:text-dark-300 dark:hover:bg-dark-700 dark:hover:text-primary-400 dark:focus:ring-offset-dark-900 relative inline-flex h-9 w-9 transform items-center justify-center rounded-lg border bg-white transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:outline-none active:scale-95"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <div className="relative h-[18px] w-[18px]">
        {/* Sun icon for light mode */}
        <Sun
          size={18}
          className={`absolute inset-0 transform transition-all duration-500 ease-in-out ${
            theme === "light"
              ? "scale-100 rotate-0 opacity-100"
              : "scale-0 -rotate-90 opacity-0"
          }`}
        />

        {/* Moon icon for dark mode */}
        <Moon
          size={18}
          className={`absolute inset-0 transform transition-all duration-500 ease-in-out ${
            theme === "dark"
              ? "scale-100 rotate-0 opacity-100"
              : "scale-0 rotate-90 opacity-0"
          }`}
        />
      </div>
    </button>
  );
};
