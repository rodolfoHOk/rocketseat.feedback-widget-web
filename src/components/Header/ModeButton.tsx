import { Moon, Sun } from 'phosphor-react';
import { ThemeName, useTheme } from '../../context/ThemeContext';

export function ModeButton() {
  const { isDarkTheme, setTheme } = useTheme();

  return (
    <div className="flex">
      <button
        className={
          isDarkTheme
            ? 'w-10 h-9 bg-zinc-900 flex justify-center items-center rounded-l-xl shadow-sm dark:shadow-black hover:bg-brand-300 hover:text-white transition-colors duration-300'
            : 'w-10 h-9 bg-brand-300 text-white flex justify-center items-center rounded-l-xl shadow-sm hover:bg-brand-500 hover:text-white transition-colors duration-300'
        }
        onClick={() => setTheme(ThemeName.LIGHT)}
      >
        <Sun className="w-4 h-4" />
      </button>
      <button
        className={
          isDarkTheme
            ? 'w-10 h-9 bg-brand-500 text-white flex justify-center items-center rounded-r-xl shadow-sm dark:shadow-black hover:bg-brand-300 hover:text-white transition-colors duration-300'
            : 'w-10 h-9 bg-white flex justify-center items-center rounded-r-xl shadow-sm hover:bg-brand-500 hover:text-white transition-colors duration-300'
        }
        onClick={() => setTheme(ThemeName.DARK)}
      >
        <Moon className="w-4 h-4" />
      </button>
    </div>
  );
}
