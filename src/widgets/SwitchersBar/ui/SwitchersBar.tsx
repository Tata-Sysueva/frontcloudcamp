import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import cls from './SwitchersBar.module.scss';

export const SwitchersBar = () => (
  <div className={cls.switchersBar}>
    <ThemeSwitcher />
    <LanguageSwitcher />
  </div>
);
