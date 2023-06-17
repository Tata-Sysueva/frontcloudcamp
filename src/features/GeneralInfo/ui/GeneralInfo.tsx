import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { UserSex } from 'features/constants';
import { Input } from 'shared/ui/components/Input/Input';
import { CusomSelect as Select } from 'shared/ui/components/Select/Select';
import { FormControl } from 'widgets/FormControl';

import cls from './GeneralInfo.module.scss';
import { type FormDataValidation } from '../../common.shema';

export const GeneralInfo = () => {
  const {
    register,
    formState: { errors },
    control
  } = useFormContext<FormDataValidation>();

  const [t] = useTranslation();

  const userSexOptions = UserSex.map((sex) => ({
    value: sex,
    label: t(`enums:people.${sex}`)
  }));

  return (
    <div className={cls.formControlWrapper}>
      <FormControl
        id="field-nickname"
        label={t('enums:labels.nickname')}
        helperText={t('enums:notes.tip')}
        errorMessage={
          errors.nickname ? t(`general_errors:invalid_nickname`) : undefined
        }
      >
        <Input
          {...register('nickname')}
          id="field-nickname"
          placeholder={t('general_placeholders:enter_text')}
          className={errors.nickname ? 'error' : ''}
        />
      </FormControl>
      <FormControl
        id="field-name"
        label={t('enums:labels.name')}
        helperText={t('enums:notes.tip')}
        errorMessage={
          errors.name ? t(`general_errors:invalid_name`) : undefined
        }
      >
        <Input
          {...register('name')}
          id="field-name"
          placeholder={t('general_placeholders:enter_text')}
          className={errors.name ? 'error' : ''}
        />
      </FormControl>
      <FormControl
        id="field-surname"
        label={t('enums:labels.surname')}
        helperText={t('enums:notes.tip')}
        errorMessage={
          errors.surname ? t(`general_errors:invalid_name`) : undefined
        }
      >
        <Input
          {...register('surname')}
          id="field-surname"
          placeholder={t('general_placeholders:enter_text')}
          className={errors.surname ? 'error' : ''}
        />
      </FormControl>
      <FormControl
        id="field-sex"
        label={t('enums:labels.sex')}
      >
        <Controller
          render={({ field }) => (
            <Select
              {...field}
              id="field-sex"
              placeholder={t('general_placeholders:not_chosen')}
              options={userSexOptions}
            />
          )}
          name="sex"
          control={control}
        />
      </FormControl>
    </div>
  );
};
