import { useTheme } from 'app/providers/ThemeProviders';
import { Theme } from 'app/providers/ThemeProviders/lib/ThemeContext';
import { ReactComponent as ToggleIcon } from 'shared/assets/icons/theme-toggle-icon.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/components/Button/Button';
import { ThemeButton, TypeElement } from 'shared/ui/constants/constants';

import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  className = ''
}) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      element={TypeElement.BUTTON}
      theme={ThemeButton.CLEAR}
      className={classNames(cls.themeSwitcher, {}, [
        className,
        cls[theme || Theme.LIGHT]
      ])}
      onClick={toggleTheme}
    >
      <ToggleIcon />
    </Button>
  );
};
