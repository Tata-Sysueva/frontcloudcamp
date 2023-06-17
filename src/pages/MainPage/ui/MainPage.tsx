import { useEffect, useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'app/hooks';
import { setFormInfo } from 'app/store/formSlice/formSlice';
import { selectFormInfo } from 'app/store/formSlice/selectors';
import { ContactInfo } from 'features/ContactInfo';
import { ContactsInfoSchema } from 'features/ContactInfo/ui/ContactInfo.shema';
import { useResize } from 'hooks/useResize';
import { UserData } from 'mocks/userData';
import { getInitialContactState } from 'pages/utils';
import { Button } from 'shared/ui/components/Button/Button';
import { Menu } from 'shared/ui/components/Menu/Menu';
import { TypeElement } from 'shared/ui/constants/constants';
import { AppRoutes } from 'shared/ui/constants/routeConstants';
import { SocialLinks } from 'widgets/SocialLinks';
import { SwitchersBar } from 'widgets/SwitchersBar';

import { MainPageHeader } from './components/MainPageHeader/MainPageHeader';
import cls from './MainPage.module.scss';

export const MainPage = () => {
  const [isOpenedMenu, setOpenedMenu] = useState(false);
  const { isScreenSm } = useResize();

  const dispatch = useAppDispatch();
  const formData = useAppSelector(selectFormInfo);

  const [t] = useTranslation();
  const navigate = useNavigate();

  const methods = useForm({
    defaultValues: getInitialContactState(formData),
    mode: 'onBlur',
    resolver: zodResolver(ContactsInfoSchema)
  });

  useEffect(() => {
    if (isScreenSm) setOpenedMenu(false);
  }, [isScreenSm]);

  return (
    <div className={cls.pageWrapper}>
      <MainPageHeader onOpenMenu={setOpenedMenu} />
      <div className={cls.pageContent}>
        <FormProvider {...methods}>
          <ContactInfo />
        </FormProvider>
        <Button
          id="button-start"
          element={TypeElement.BUTTON}
          onClick={methods.handleSubmit((data) => {
            dispatch(setFormInfo({ ...data, ...formData }));

            navigate(AppRoutes.CREATE);
          })}
        >
          {t('enums:links.start')}
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
    </div>
  );
};
