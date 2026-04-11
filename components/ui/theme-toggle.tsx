"use client";

import { Button } from "@/components/ui/button";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon-lg"
      className="rounded-full absolute lg:ml-5 "
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <FaSun className="absolute h-10 w-10 transition-all duration-300 rotate-0 scale-100 dark:-rotate-90 dark:scale-0 dark:opacity-0" />
      <FaMoon className="absolute h-10 w-10 transition-all duration-300 rotate-90 scale-0 dark:rotate-0 dark:scale-100 dark:opacity-100" />
    </Button>
  );
}
