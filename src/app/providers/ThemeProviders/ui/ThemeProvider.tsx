import { type FC, useMemo, useState } from 'react';

import {
  LOCAL_STORAGE_THEME_KEY,
  type Theme,
  ThemeContext
} from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;

export const ThemeProvider: FC = ({ children }) => {
  const [theme, updateTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      updateTheme
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
