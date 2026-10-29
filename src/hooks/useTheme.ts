import { useCallback, useEffect, useState } from "react";

export type Theme = "light" | "dark";

/**
 * Key of the theme chosen with the toggle. The script in index.html reads it
 * before the first paint, so the page never flashes the other theme.
 */
const STORAGE_KEY = "theme";

const readStoredTheme = (): Theme | null => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "light" || stored === "dark" ? stored : null;
  } catch {
    return null;
  }
};

const darkScheme = () => window.matchMedia("(prefers-color-scheme: dark)");

const applyTheme = (theme: Theme) =>
  document.documentElement.classList.toggle("dark", theme === "dark");

/**
 * The current theme and the way to switch it. Until the visitor picks one,
 * the site follows the theme of the system, even when it changes.
 */
export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );

  useEffect(() => {
    const media = darkScheme();
    const handleChange = () => {
      if (!readStoredTheme()) {
        const next = media.matches ? "dark" : "light";
        applyTheme(next);
        setTheme(next);
      }
    };
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = useCallback(() => {
    const next = theme === "dark" ? "light" : "dark";
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Without storage the choice simply lasts until the page is reloaded
    }
    applyTheme(next);
    setTheme(next);
  }, [theme]);

  return { theme, toggleTheme };
};
