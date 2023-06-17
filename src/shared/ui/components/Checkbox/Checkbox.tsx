import React, { type InputHTMLAttributes } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Checkbox.module.scss';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  description: string | number;
  isChecked: boolean;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, description, isChecked, onChange, ...otherProps }, ref) => (
    <label
      className={cls.checkboxWrapper}
      htmlFor={id}
    >
      <input
        {...otherProps}
        ref={ref}
        id={id}
        type="checkbox"
        onChange={(evt) => onChange(evt)}
      />
      <span
        className={classNames(
          cls.checkbox,
          { [cls['checkbox--active']]: isChecked },
          []
        )}
        aria-hidden="true"
      />
      {description}
    </label>
  )
);
