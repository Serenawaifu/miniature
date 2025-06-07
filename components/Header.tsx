import { useState } from "react";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import DarkModeToggle from "@/components/DarkModeToggle";
import BandScrollArrows from "@/components/BandScrollArrows";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-2">
          <button
            className="sm:hidden p-2"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <span className="text-2xl">☰</span>
          </button>
          <div className="hidden sm:flex items-center space-x-2">
            <ThemeSwitcher />
            <DarkModeToggle />
          </div>
        </div>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 bg-black/60 flex flex-col">
          <button
            className="self-end m-4 text-3xl"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            ×
          </button>
          <div className="flex-1 flex items-center justify-center">
            <ThemeSwitcher />
          </div>
        </div>
      )}
    </header>
  );
}
