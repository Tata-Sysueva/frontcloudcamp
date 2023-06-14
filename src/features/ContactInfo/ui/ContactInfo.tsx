import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/components/Input/Input';
import { FormControl } from 'widgets/FormControl';

import cls from './ContactInfo.module.scss';

export const ContactInfo = () => {
  const [t] = useTranslation();

  return (
    <div className={cls.formControlWrapper}>
      <FormControl
        id="field-number"
        label={t('enums:labels.number_phone')}
      >
        <Input
          id="field-number"
          placeholder="+7 (900) 000 00 00"
          type="tel"
        />
      </FormControl>
      <FormControl
        id="field-email"
        label={t('enums:labels.email')}
      >
        <Input
          id="field-email"
          placeholder={t('general_placeholders:enter_text')}
          type="email"
        />
      </FormControl>
    </div>
  );
};
