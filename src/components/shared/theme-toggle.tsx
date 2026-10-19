"use client";

import {
  Moon,
  Sun,
} from "lucide-react";

import { useThemeContext } from "@/src/context/theme-context";

export default function ThemeToggle() {
  const {
    theme,
    toggleTheme,
  } = useThemeContext();

  return (
    <button
      onClick={toggleTheme}
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        border
        border-black/10
        bg-white
        shadow-xl
        transition-all
        duration-300
        hover:scale-110

        dark:border-white/10
        dark:bg-zinc-900
      "
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-yellow-400" />
      ) : (
        <Moon className="h-5 w-5 text-cyan-500" />
      )}
    </button>
  );
}