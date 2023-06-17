import { useState } from 'react';

import { useController, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { type FormDataValidation } from 'features/common.shema';
import { checkboxDescriptions } from 'features/constants';
import { Checkbox } from 'shared/ui/components/Checkbox/Checkbox';

import cls from '../Advantages.module.scss';

export const CheckboxGroup = () => {
  const { register, control } = useFormContext<FormDataValidation>();
  const { field } = useController<FormDataValidation, 'checkboxes'>({
    control,
    name: 'checkboxes'
  });

  const [value, setValue] = useState<Array<string | null>>(field.value || []);

  const [t] = useTranslation();

  return (
    <div className={cls.checkboxGroup}>
      <span>{t('enums:labels.checkbox')}</span>
      {Object.values(checkboxDescriptions).map(
        (description: string | null, index) => (
          <Checkbox
            {...register('checkboxes')}
            key={description}
            id={`field-checkbox-group-option-${index + 1}`}
            description={description || ''}
            onChange={(evt) => {
              const valueCopy = [...value];

              valueCopy[index] = evt.target.checked ? evt.target.value : null;
              field.onChange(valueCopy);
              setValue(valueCopy);
            }}
            value={description || ''}
            isChecked={value.includes(description)}
          />
        )
      )}
    </div>
  );
};
