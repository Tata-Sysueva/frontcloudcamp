import React from 'react';

import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Input } from 'shared/ui/components/Input/Input';
import { FormControl } from 'widgets/FormControl';

import cls from './ContactInfo.module.scss';
import { type ContactsInfoFormValues } from './ContactInfo.shema';

export const ContactInfo = () => {
  const {
    register,
    formState: { errors }
  } = useFormContext<ContactsInfoFormValues>();

  const [t] = useTranslation();

  return (
    <div className={cls.formControlWrapper}>
      <FormControl
        id="field-number"
        label={t('enums:labels.number_phone')}
        errorMessage={
          errors.tel ? t(`general_errors:invalid_phone_number`) : undefined
        }
      >
        <Input
          {...register('tel')}
          id="field-number"
          placeholder="+7 (900) 000 00 00"
          type="tel"
          isDisabled
        />
      </FormControl>
      <FormControl
        id="field-email"
        label={t('enums:labels.email')}
        errorMessage={
          errors.email ? t(`general_errors:invalid_email`) : undefined
        }
      >
        <Input
          {...register('email')}
          id="field-email"
          placeholder={t('general_placeholders:enter_text')}
          type="email"
          isDisabled
        />
      </FormControl>
    </div>
  );
};
