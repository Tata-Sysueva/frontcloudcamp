import { useTranslation } from 'react-i18next';
import Select from 'react-select';

import { useTheme } from 'app/providers/ThemeProviders';
import { Theme } from 'app/providers/ThemeProviders/lib/ThemeContext';

import { selectStyles } from './Select.styles';

type Options = { label: string; value: string };

interface SelectProps {
  placeholder?: string;
  options: Options[] | [];
}

export const CusomSelect = ({ options, placeholder }: SelectProps) => {
  const { theme } = useTheme();
  const [t] = useTranslation();

  const appTheme = theme || Theme.LIGHT;

  const selectPlaceholder = placeholder || t('general_placeholders:enter_text');

  return (
    <Select
      options={options}
      styles={selectStyles(appTheme)}
      placeholder={selectPlaceholder}
    />
  );
};
