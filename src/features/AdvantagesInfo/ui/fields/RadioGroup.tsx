import { useState } from 'react';

import { useController, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { type FormDataValidation } from 'features/common.shema';
import { checkboxDescriptions } from 'features/constants';
import { RadioButton } from 'shared/ui/components/RadioButton/RadioButton';

import cls from '../Advantages.module.scss';

export const RadioGroup = () => {
  const { register, control } = useFormContext<FormDataValidation>();
  const { field } = useController<FormDataValidation, 'radio'>({
    control,
    name: 'radio'
  });

  const [value, setValue] = useState<string | null>(field.value || '');

  const [t] = useTranslation();

  return (
    <div className={cls.checkboxGroup}>
      <span>{t('enums:labels.radio')}</span>
      {Object.values(checkboxDescriptions).map(
        (description: string | null, index) => (
          <RadioButton
            {...register('radio')}
            key={description}
            id={`field-radio-group-option-${index + 1}`}
            description={description || ''}
            onChange={(evt) => {
              let valueCopy = value;

              valueCopy = evt.target.checked ? evt.target.value : null;
              field.onChange(valueCopy);
              setValue(valueCopy);
            }}
            value={description || ''}
            isChecked={value === description}
          />
        )
      )}
    </div>
  );
};
