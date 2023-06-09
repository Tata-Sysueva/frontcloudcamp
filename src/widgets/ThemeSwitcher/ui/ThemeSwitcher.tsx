import { useTheme } from 'app/providers/ThemeProviders';
import { Theme } from 'app/providers/ThemeProviders/lib/ThemeContext';
import ToggleIcon from 'shared/assets/icons/theme-toggle-icon.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/components/Button/Button';

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
      theme={ThemeButton.PRIMARY}
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
