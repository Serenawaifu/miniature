'use client';

import { useEffect, useState } from 'react';
import { setTheme, getTheme } from '@/lib/theme';

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const theme = getTheme();
    setDark(theme === 'dark');
    setTheme(theme);
  }, []);

  function toggle() {
    setDark((d) => {
      const newTheme = !d ? 'dark' : 'light';
      setTheme(newTheme);
      return !d;
    });
  }

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={toggle}
      className="ml-2 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    >
      {dark ? (
        <span role="img" aria-label="Light">🌞</span>
      ) : (
        <span role="img" aria-label="Dark">🌙</span>
      )}
    </button>
  );
}
