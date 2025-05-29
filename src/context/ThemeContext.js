"use client";
import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('light');

  // Load theme from localStorage (optional)
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setMode(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    }
  }, []);

  const toggle = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("theme", newMode);
    document.documentElement.classList.toggle("dark", newMode === "dark");
  };

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className="min-h-screen transition-all duration-1000 ease-in-out">
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
