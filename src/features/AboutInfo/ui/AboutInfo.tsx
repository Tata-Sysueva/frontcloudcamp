import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { type FormDataValidation } from 'features/common.shema';
import { Textarea } from 'shared/ui/components/Textarea/Textarea';
import { FormControl } from 'widgets/FormControl';

export const AboutInfo = () => {
  const {
    register,
    formState: { errors }
  } = useFormContext<FormDataValidation>();

  const [t] = useTranslation();

  return (
    <FormControl
      id="field-about"
      label={t('enums:labels.about')}
      helperText={t('enums:notes.tip')}
      errorMessage={
        errors.about ? t(`general_errors:invalid_textaria`) : undefined
      }
    >
      <Textarea
        {...register('about')}
        id="field-about"
        placeholder={t('general_placeholders:enter_text')}
        rows={3}
        className={errors.about ? 'error' : ''}
      />
    </FormControl>
  );
};
