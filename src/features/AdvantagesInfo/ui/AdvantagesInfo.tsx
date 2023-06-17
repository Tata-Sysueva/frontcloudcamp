import { useFieldArray, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { type FormDataValidation } from 'features/common.shema';
import { ReactComponent as PlusIcon } from 'shared/assets/icons/plus-icon.svg';
import { Button } from 'shared/ui/components/Button/Button';
import { ThemeButton, TypeElement } from 'shared/ui/constants/constants';

import cls from './Advantages.module.scss';
import { AdvantagesField } from './fields/AdvantagesField';
import { CheckboxGroup } from './fields/CheckboxesGroup';
import { RadioGroup } from './fields/RadioGroup';

export const AdvantagesInfo = () => {
  const [t] = useTranslation();

  const { control } = useFormContext<FormDataValidation>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'advantages'
  });

  const onRemove = (index: number) => remove(index);

  return (
    <div className={cls.formControlWrapper}>
      <div className={cls.advantagesWrapper}>
        {fields.length === 0 && <span>{t('enums:labels.advantages')}</span>}
        {fields.map((advantage, index) => (
          <AdvantagesField
            key={advantage.id}
            index={index}
            onRemove={onRemove}
          />
        ))}
        <Button
          id="button-add"
          element={TypeElement.BUTTON}
          theme={ThemeButton.OUTLINE}
          aria-label={t('general_actions:add')}
          onClick={() => append({ advantage: null })}
          icon={<PlusIcon />}
        />
      </div>

      <CheckboxGroup />
      <RadioGroup />
    </div>
  );
};
