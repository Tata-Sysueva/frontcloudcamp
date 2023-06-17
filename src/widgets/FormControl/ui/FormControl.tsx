import { type ReactNode } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Formcontrol.module.scss';

interface FormControlProps {
  id: string;
  label?: string;
  helperText?: string;
  errorMessage?: string;
  children: ReactNode;
  className?: string;
}

export const FormControl = ({
  id,
  label,
  helperText,
  errorMessage,
  children,
  className = '',
  ...otherProps
}: FormControlProps) => (
  <div
    className={classNames(cls.fieldset, {}, [className])}
    {...otherProps}
  >
    {label != null && <label htmlFor={id}>{label}</label>}

    {children}

    {helperText && !errorMessage ? (
      <span className={cls.helperText}>{helperText}</span>
    ) : null}
    {errorMessage ? <span className={cls.error}>{errorMessage}</span> : null}
  </div>
);
