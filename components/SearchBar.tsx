'use client';

import { useRef, useState } from 'react';
import { cn } from '@/utils/classnames';

export default function SearchBar() {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleToggle() {
    setOpen((o) => {
      if (!o) setTimeout(() => inputRef.current?.focus(), 100);
      return !o;
    });
  }

  return (
    <div className="relative">
      <button
        aria-label="Search"
        onClick={handleToggle}
        className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      >
        <span role="img" aria-label="Search">🔎</span>
      </button>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search anime, manga..."
        className={cn(
          "absolute right-0 top-0 h-10 w-48 pl-3 pr-10 rounded bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow transition-all duration-200",
          open ? "opacity-100 pointer-events-auto scale-100" : "opacity-0 pointer-events-none scale-95"
        )}
        style={{ zIndex: 20 }}
      />
    </div>
  );
}
