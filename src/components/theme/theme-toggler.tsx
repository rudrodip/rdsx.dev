"use client";

import { MoonIcon, SunIcon, LaptopIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ThemeToggler() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <span>
            <SunIcon className="h-[1.2rem] w-[1.2rem] mr-2" />
          </span>
          <h1>Light</h1>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <span>
            <MoonIcon className="h-[1.2rem] w-[1.2rem] mr-2" />
          </span>
          <h1>Dark</h1>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <span>
            <LaptopIcon className="h-[1.2rem] w-[1.2rem] mr-2" />
          </span>
          <h1>System</h1>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
