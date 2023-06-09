import { type ButtonHTMLAttributes, type FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ThemeButton {
  PRIMARY = 'primary',
  OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  type?: 'button' | 'submit' | 'reset';
  isDisabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  className = '',
  children,
  theme = ThemeButton.PRIMARY,
  type,
  isDisabled,
  ...otherProps
}) => (
  <button
    {...otherProps}
    className={classNames(cls.button, {}, [cls[className], cls[theme]])}
    type={type || 'button'}
    disabled={isDisabled}
  >
    {children}
  </button>
);
