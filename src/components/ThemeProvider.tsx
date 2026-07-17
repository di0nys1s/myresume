"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Theme = "dark" | "light";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function faviconForTheme(theme: Theme) {
  return theme === "dark" ? "/favicon-dark.svg" : "/favicon-light.svg";
}

export function applyFavicon(theme: Theme) {
  const href = `${faviconForTheme(theme)}?v=${theme}`;

  document
    .querySelectorAll("link[rel='icon'], link[rel='shortcut icon']")
    .forEach((node) => node.remove());

  const link = document.createElement("link");
  link.id = "theme-favicon";
  link.rel = "icon";
  link.type = "image/svg+xml";
  link.setAttribute("sizes", "any");
  link.href = href;
  document.head.appendChild(link);
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.classList.toggle("light", theme === "light");
  root.style.colorScheme = theme;
  applyFavicon(theme);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const next: Theme = stored === "light" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
  }, []);

  useEffect(() => {
    applyFavicon(theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    window.localStorage.setItem("theme", next);
    setTheme(next);
    applyTheme(next);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}
