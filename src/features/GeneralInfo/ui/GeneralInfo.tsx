import { useTranslation } from 'react-i18next';

import { UserSexOptions } from 'features/constants';
import { Input } from 'shared/ui/components/Input/Input';
import { CusomSelect as Select } from 'shared/ui/components/Select/Select';
import { FormControl } from 'widgets/FormControl';

import cls from './GeneralInfo.module.scss';

export const GeneralInfo = () => {
  const [t] = useTranslation();

  return (
    <div className={cls.formControlWrapper}>
      <FormControl
        id="field-nickname"
        label={t('enums:labels.nickname')}
        helperText="Tip"
      >
        <Input
          id="field-nickname"
          placeholder={t('general_placeholders:enter_text')}
        />
      </FormControl>
      <FormControl
        id="field-name"
        label={t('enums:labels.name')}
        helperText="Tip"
      >
        <Input
          id="field-name"
          placeholder={t('general_placeholders:enter_text')}
        />
      </FormControl>
      <FormControl
        id="field-surname"
        label={t('enums:labels.surname')}
        helperText="Tip"
      >
        <Input
          id="field-surname"
          placeholder={t('general_placeholders:enter_text')}
        />
      </FormControl>
      <FormControl
        id="field-sex"
        label={t('enums:labels.sex')}
      >
        <Select
          options={UserSexOptions}
          placeholder={t('general_placeholders:not_chosen')}
        />
      </FormControl>
    </div>
  );
};
