import { useController, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { ReactComponent as DeleteIcon } from 'shared/assets/icons/delete-icon.svg';
import { Button } from 'shared/ui/components/Button/Button';
import { Input } from 'shared/ui/components/Input/Input';
import { ThemeButton, TypeElement } from 'shared/ui/constants/constants';
import { FormControl } from 'widgets/FormControl';

import cls from '../Advantages.module.scss';
import { type AdvantagesInfoFormValues } from '../Advantages.shema';

interface AdvantagesFieldProps {
  index: number;
  onRemove: (index: number) => void;
}

export const AdvantagesField = ({ index, onRemove }: AdvantagesFieldProps) => {
  const [t] = useTranslation();

  const { register } = useFormContext();
  const {
    formState: { errors }
  } = useController<AdvantagesInfoFormValues, `advantages.${number}.advantage`>(
    {
      name: `advantages.${index}.advantage`
    }
  );

  const errorMessage = errors.advantages?.[index]?.advantage?.type as
    | 'invalid_literal'
    | undefined;

  return (
    <div className={cls.advantagesFieldWrapper}>
      <FormControl
        id={`field-advantages-${index + 1}`}
        label={index === 0 ? t('enums:labels.advantages') : ''}
        errorMessage={
          errorMessage !== undefined
            ? `${t(`general_errors.${errorMessage}`)}`
            : ''
        }
      >
        <Input
          {...register(`advantages.${index}.advantage`)}
          id={`field-advantages-${index + 1}`}
          placeholder={t('general_placeholders:enter_text')}
        />
      </FormControl>
      <div
        style={{
          marginTop: index === 0 ? '36px' : '16px'
        }}
      >
        <Button
          id={`button-remove-${index + 1}`}
          element={TypeElement.BUTTON}
          theme={ThemeButton.CLEAR}
          className="deleteButton"
          aria-label={t('general_actions:delete')}
          icon={<DeleteIcon />}
          onClick={() => onRemove(index)}
        />
      </div>
    </div>
  );
};
