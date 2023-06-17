import React from 'react';

import { useTranslation } from 'react-i18next';
import Select, { type SelectInstance } from 'react-select';

import { useTheme } from 'app/providers/ThemeProviders';
import { Theme } from 'app/providers/ThemeProviders/lib/ThemeContext';

import { selectStyles } from './Select.styles';

type Options = { label: string; value: string };

interface SelectProps {
  id: string;
  placeholder?: string;
  options: Options[] | [];
}

export const CusomSelect = React.forwardRef<SelectInstance, SelectProps>(
  ({ id, options, placeholder, ...otherProps }, ref) => {
    const { theme } = useTheme();
    const [t] = useTranslation();

    const appTheme = theme || Theme.LIGHT;

    const selectPlaceholder =
      placeholder || t('general_placeholders:enter_text');

    return (
      <Select
        {...otherProps}
        ref={ref}
        options={options}
        styles={selectStyles(appTheme)}
        placeholder={selectPlaceholder}
        inputId={id}
      />
    );
  }
);
