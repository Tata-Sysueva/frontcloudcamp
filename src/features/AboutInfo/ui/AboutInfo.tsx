import { useTranslation } from 'react-i18next';

import { Textarea } from 'shared/ui/components/Textarea/Textarea';
import { FormControl } from 'widgets/FormControl';

export const AboutInfo = () => {
  const [t] = useTranslation();

  return (
    <FormControl
      id="field-about"
      label={t('enums:labels.about')}
      helperText="Tip"
    >
      <Textarea
        id="field-about"
        placeholder={t('general_placeholders:enter_text')}
        rows={3}
      />
    </FormControl>
  );
};
