import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

interface ThemeContextData {
  isDarkTheme: boolean;
  setTheme: (theme: string) => void;
}

const ThemeContext = createContext({} as ThemeContextData);

interface ThemeProviderProps {
  children: ReactNode;
}

export enum ThemeName {
  DARK = 'theme-dark',
  LIGHT = 'theme-light',
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  function getTheme() {
    const theme = localStorage.getItem('theme');
    if (theme && theme === ThemeName.DARK) {
      setIsDarkTheme(true);
    } else {
      setIsDarkTheme(false);
    }
  }

  function setTheme(theme: string) {
    if (theme === ThemeName.DARK) {
      setIsDarkTheme(true);
      localStorage.setItem('theme', ThemeName.DARK);
    } else {
      setIsDarkTheme(false);
      localStorage.setItem('theme', ThemeName.LIGHT);
    }
  }

  useEffect(() => {
    getTheme();
  }, []);

  useEffect(() => {
    if (isDarkTheme) {
      document.querySelector('html')?.classList.add('dark');
    } else {
      document.querySelector('html')?.classList.remove('dark');
    }
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
