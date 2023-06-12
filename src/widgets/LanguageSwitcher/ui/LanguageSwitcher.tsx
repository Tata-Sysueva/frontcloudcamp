import upperFirst from 'lodash/upperFirst';
import { useTranslation } from 'react-i18next';
import { MdLanguage } from 'react-icons/md';

import { Button } from 'shared/ui/components/Button/Button';
import { ThemeButton, TypeElement } from 'shared/ui/constants/constants';

export const LanguageSwitcher = () => {
  const [, { language, changeLanguage }] = useTranslation();

  return (
    <Button
      element={TypeElement.BUTTON}
      theme={ThemeButton.CLEAR}
      onClick={() => {
        changeLanguage(language === 'en' ? 'ru' : 'en').catch((err) =>
          console.error(err)
        );
      }}
    >
      <MdLanguage />
      <p>{upperFirst(language)}</p>
    </Button>
  );
};
