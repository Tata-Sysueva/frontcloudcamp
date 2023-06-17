import React, { type InputHTMLAttributes } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './RadioButton.module.scss';

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  isChecked: boolean;
  description: string | number;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ id, isChecked, description, onChange }, ref) => (
    <label
      className={cls.radioButtonWrapper}
      htmlFor={id}
    >
      <input
        ref={ref}
        id={id}
        type="radio"
        value={description}
        checked={isChecked}
        onChange={(evt) => onChange(evt)}
      />
      <span
        className={classNames(
          cls.radioButton,
          { [cls['radioButton--active']]: isChecked },
          []
        )}
        aria-hidden="true"
      />
      {description}
    </label>
  )
);
