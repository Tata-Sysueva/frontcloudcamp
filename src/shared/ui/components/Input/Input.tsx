import { type InputHTMLAttributes } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  className?: string;
  placeholder?: string;
}

export const Input = ({
  id,
  className = '',
  placeholder = 'Placeholder',
  ...otherProps
}: InputProps) => (
  <input
    {...otherProps}
    id={id}
    className={classNames(cls.field, {}, [cls[className]])}
    placeholder={placeholder}
  />
);
