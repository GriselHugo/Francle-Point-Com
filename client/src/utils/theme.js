import React, { createContext, useContext, useEffect, useState } from 'react';

// 1) Création du contexte
const ThemeContext = createContext();

// 2) Hook pratique pour accéder rapidement au contexte
export const useTheme = () => useContext(ThemeContext);

// 3) Provider qui gère l’état et le persiste
export const ThemeProvider = ({ children }) => {
  // a. état initial : localStorage > préférence système > 'light'
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  // b. à chaque changement : on applique une data-attribute sur <html>
  useEffect(() => {
    document.documentElement.dataset.theme = theme;  // ex. <html data-theme="dark">
    localStorage.setItem('theme', theme);
  }, [theme]);

  // c. fonction de bascule
  const toggleTheme = () =>
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
