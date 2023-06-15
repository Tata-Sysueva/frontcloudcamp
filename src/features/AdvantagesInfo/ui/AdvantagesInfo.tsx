import { useState } from 'react';

import { useTranslation } from 'react-i18next';

import { ReactComponent as PlusIcon } from 'shared/assets/icons/plus-icon.svg';
import { Button } from 'shared/ui/components/Button/Button';
import { Checkbox } from 'shared/ui/components/Checkbox/Checkbox';
import { RadioButton } from 'shared/ui/components/RadioButton/RadioButton';
import { ThemeButton, TypeElement } from 'shared/ui/constants/constants';

import cls from './Advantages.module.scss';
import { AdvantagesFields } from './fields/AdvantagesFields';

interface CheckboxDescriptionsType {
  field1: string | number;
  field2: string | number;
  field3: string | number;
}

const CheckboxDescriptions: CheckboxDescriptionsType = {
  field1: '1',
  field2: '2',
  field3: '3'
};

const index = 0;
const countFields = 2;
const onRemove = (index: number) => console.debug(`remove ${index}`);

export const AdvantagesInfo = () => {
  const [fieldRadio, setFieldRadio] = useState('');

  const [t] = useTranslation();

  const onCheck = (id: string) => console.debug(id);

  const handleRadioChange = (id: string) => setFieldRadio(id);

  return (
    <div className={cls.formControlWrapper}>
      <div>
        <AdvantagesFields
          index={index}
          countFields={countFields}
          onRemove={onRemove}
        />
        <Button
          id="button-add"
          element={TypeElement.BUTTON}
          theme={ThemeButton.OUTLINE}
          aria-label={t('general_actions:add')}
          onClick={() => console.debug('Add field')}
          icon={<PlusIcon />}
        />
      </div>
      <div className={cls.checkboxGroup}>
        <span>{t('enums:labels.checkbox')}</span>
        {Object.values(CheckboxDescriptions).map((description, index) => (
          <Checkbox
            key={description}
            id={`field-checkbox-group-option-${index + 1}`}
            description={description}
            onCheck={onCheck}
          />
        ))}
      </div>
      <div className={cls.checkboxGroup}>
        <span>{t('enums:labels.radio')}</span>
        {Object.values(CheckboxDescriptions).map((description, index) => (
          <RadioButton
            key={description}
            id={`field-radio-group-option-${index + 1}`}
            isValue={fieldRadio === `field-radio-group-option-${index + 1}`}
            description={description}
            onChange={handleRadioChange}
          />
        ))}
      </div>
    </div>
  );
};
