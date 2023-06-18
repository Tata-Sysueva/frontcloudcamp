import { useTranslation } from 'react-i18next';
import { IoIosMenu } from 'react-icons/io';

import { useResize } from 'app/hooks/useResize';
import { UserData } from 'mocks/userData';
import { Button } from 'shared/ui/components/Button/Button';
import { ThemeButton, TypeElement } from 'shared/ui/constants/constants';
import { SwitchersBar } from 'widgets/SwitchersBar';
import { UserProfile } from 'widgets/UserProfile';

import cls from './MainPageHeader.module.scss';

interface MainPageHeaderProps {
  onOpenMenu: (isOpened: boolean) => void;
}

export const MainPageHeader = ({ onOpenMenu }: MainPageHeaderProps) => {
  const { isScreenSm } = useResize();

  const [t] = useTranslation();

  return (
    <div className={cls.pageHeader}>
      <UserProfile userData={UserData} />
      {isScreenSm && <SwitchersBar />}
      <Button
        id="button-open"
        element={TypeElement.BUTTON}
        theme={ThemeButton.CLEAR}
        className="openMenu"
        icon={
          <IoIosMenu
            size={32}
            style={{ fill: '#5558fa' }}
          />
        }
        onClick={() => onOpenMenu(true)}
      >
        <span className="visually-hidden">{t('general_actions:open')}</span>
      </Button>
    </div>
  );
};
