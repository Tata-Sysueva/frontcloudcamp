import upperFirst from 'lodash/upperFirst';
import { useTranslation } from 'react-i18next';
import { MdLanguage } from 'react-icons/md';

import { Button, ThemeButton } from 'shared/ui/components/Button/Button';

export const LanguageSwitcher = () => {
  const [, { language, changeLanguage }] = useTranslation();

  return (
    <Button
      theme={ThemeButton.PRIMARY}
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
