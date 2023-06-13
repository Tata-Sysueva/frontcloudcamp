import { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { IoIosMenu } from 'react-icons/io';

import { useResize } from 'hooks/useResize';
import { UserData } from 'mocks/userData';
import { Button } from 'shared/ui/components/Button/Button';
import { Menu } from 'shared/ui/components/Menu/Menu';
import { ThemeButton, TypeElement } from 'shared/ui/constants/constants';
import { SocialLinks } from 'widgets/SocialLinks';
import { SwitchersBar } from 'widgets/SwitchersBar';
import { UserProfile } from 'widgets/UserProfile';

import cls from './MainPage.module.scss';

export const MainPage = () => {
  const [isOpenedMenu, setOpenedMenu] = useState(false);
  const { isScreenSm } = useResize();

  const [t] = useTranslation();

  useEffect(() => {
    if (isScreenSm) setOpenedMenu(false);
  }, [isScreenSm]);

  return (
    <>
      <div className={cls.pageHeader}>
        <UserProfile userData={UserData} />
        {isScreenSm && <SwitchersBar />}
        <Button
          element={TypeElement.BUTTON}
          theme={ThemeButton.CLEAR}
          className="openMenu"
          icon={
            <IoIosMenu
              size={32}
              style={{ fill: '#5558fa' }}
            />
          }
          onClick={() => setOpenedMenu(true)}
        >
          <span className="visually-hidden">{t('general_actions:open')}</span>
        </Button>
      </div>
      <Menu
        isOpened={isOpenedMenu}
        onClose={() => setOpenedMenu(false)}
      >
        <SocialLinks
          socialLinks={UserData.socialLinks}
          className="socialLinksMenu"
        />
        <SwitchersBar />
      </Menu>
    </>
  );
};
