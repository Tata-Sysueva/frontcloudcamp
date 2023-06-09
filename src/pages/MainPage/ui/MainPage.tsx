import { useTranslation } from 'react-i18next';

import { Button, ThemeButton } from 'shared/ui/components/Button/Button';
import { Textarea } from 'shared/ui/components/Textarea/Textarea';
import { FormControl } from 'widgets/FormControl';
import { SwitchersBar } from 'widgets/SwitchersBar';

export const MainPage = () => {
  const [t] = useTranslation();

  return (
    <div>
      <SwitchersBar />
      <Button theme={ThemeButton.PRIMARY}>{t('general_actions:start')}</Button>
      <FormControl
        id="field-sex"
        label="Номер телефона"
      >
        <Textarea id="field-sex" />
      </FormControl>
    </div>
  );
};
