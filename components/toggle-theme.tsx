"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

const ToggleTheme = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      className={
        "border-0 shadow-none rounded-2xl bg-transparent dark:bg-transparent p-0"
      }
      size="iconTheme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Переключить тему</span>
    </Button>
  );
};

export default ToggleTheme;
