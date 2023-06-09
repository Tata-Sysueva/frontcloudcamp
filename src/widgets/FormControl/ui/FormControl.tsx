import { type FieldsetHTMLAttributes } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Formcontrol.module.scss';

interface FormControlProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  id: string;
  label?: string;
  helperText?: string;
  error?: string;
  className?: string;
}

export const FormControl = ({
  id,
  label,
  helperText,
  error,
  children,
  className = '',
  ...otherProps
}: FormControlProps) => (
  <fieldset
    className={classNames(cls.fieldset, {}, [className])}
    {...otherProps}
  >
    {label != null && <label htmlFor={id}>{label}</label>}

    {children}

    {helperText != null && <span className={cls.helperText}>{helperText}</span>}
    {error != null && <span className={cls.error}>{error}</span>}
  </fieldset>
);
