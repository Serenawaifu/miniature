'use client';
import { createContext, useContext, useEffect, useState } from "react";

export type ThemeKey = "retroPixel" | "sakuraBlossom" | "cyberpunkNeon" | "minimalLight" | "cozyCafe";

const ThemeContext = createContext<{
  theme: ThemeKey;
  setTheme: (t: ThemeKey) => void;
}>({
  theme: "cyberpunkNeon",
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeKey>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as ThemeKey) || "cyberpunkNeon";
    }
    return "cyberpunkNeon";
  });

  useEffect(() => {
    document.documentElement.classList.remove(
      "retroPixel",
      "sakuraBlossom",
      "cyberpunkNeon",
      "minimalLight",
      "cozyCafe"
    );
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
    if (theme === "minimalLight" || theme === "sakuraBlossom") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
