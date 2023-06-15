import { useTranslation } from 'react-i18next';

import { ReactComponent as DeleteIcon } from 'shared/assets/icons/delete-icon.svg';
import { Button } from 'shared/ui/components/Button/Button';
import { Input } from 'shared/ui/components/Input/Input';
import { ThemeButton, TypeElement } from 'shared/ui/constants/constants';
import { FormControl } from 'widgets/FormControl';

import cls from '../Advantages.module.scss';

interface AdvantagesFieldProps {
  index: number;
  countFields: number;
  onRemove: (index: number) => void;
}

export const AdvantagesFields = ({
  index,
  countFields,
  onRemove
}: AdvantagesFieldProps) => {
  const [t] = useTranslation();

  return (
    <div className={cls.advantagesFieldWrapper}>
      <FormControl
        id="field-advantages"
        label={index === 0 ? t('enums:labels.advantages') : ''}
      >
        <Input
          id="field-advantages"
          placeholder={t('general_placeholders:enter_text')}
        />
      </FormControl>
      {countFields !== 1 && (
        <div
          style={{
            marginTop: index === 0 ? '35px' : '14px'
          }}
        >
          <Button
            element={TypeElement.BUTTON}
            theme={ThemeButton.CLEAR}
            className="deleteButton"
            aria-label={t('general_actions:delete')}
            icon={<DeleteIcon />}
            onClick={() => onRemove(index)}
          />
        </div>
      )}
    </div>
  );
};
