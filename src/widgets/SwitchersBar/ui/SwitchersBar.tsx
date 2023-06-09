import { LanguageSwitcher } from 'features/LanguageSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import cls from './SwithersBar.module.scss';

export const SwitchersBar = () => (
  <div className={cls.switchersBar}>
    <ThemeSwitcher />
    <LanguageSwitcher />
  </div>
);
