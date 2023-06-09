import { createContext } from 'react';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

export interface ThemeContextProps {
  theme: Theme | null;
  updateTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext({
  theme: Theme.LIGHT
} as ThemeContextProps);

export const LOCAL_STORAGE_THEME_KEY = 'theme';
