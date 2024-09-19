"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  function toggleTheme() {
    theme == "dark" ? setTheme("light") : setTheme("dark")
  }

  return (
    <Button onClick={toggleTheme} variant="outline" size="icon">
      {
        theme == "dark" ?
          <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
          :
          <Moon className="absolute h-[1.2rem] w-[1.2rem] transition-all" />
      }
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}