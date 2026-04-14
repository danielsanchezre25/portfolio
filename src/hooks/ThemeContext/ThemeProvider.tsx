import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import type { Theme } from "./ThemeContext";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(() => {
    const ifDarkModeDefault = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return ifDarkModeDefault ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute('data-theme', newTheme);
    setCurrentTheme(newTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, setTheme: toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

