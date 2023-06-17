import React, { type InputHTMLAttributes } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Input.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  className?: string;
  placeholder?: string;
  isDisabled?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ id, className = '', placeholder, isDisabled, ...otherProps }, ref) => (
    <input
      {...otherProps}
      ref={ref}
      id={id}
      className={classNames(cls.field, {}, [cls[className]])}
      placeholder={placeholder}
      disabled={isDisabled}
    />
  )
);
