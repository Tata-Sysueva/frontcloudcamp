import React, { type ReactNode, type FC } from 'react';

import { Link } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeButton, TypeElement } from 'shared/ui/constants/constants';

import cls from './Button.module.scss';

type ContainerElement = HTMLButtonElement | HTMLAnchorElement;

interface ButtonProps {
  id?: string;
  className?: string;
  element: string;
  link?: string;
  theme?: ThemeButton;
  type?: 'button' | 'submit' | 'reset';
  isDisabled?: boolean;
  icon?: ReactNode;
  onClick?: (evt: React.MouseEvent<ContainerElement>) => void;
}

export const Button: FC<ButtonProps> = ({
  id,
  className = '',
  children,
  element = TypeElement.BUTTON,
  link = '',
  theme = ThemeButton.PRIMARY,
  type,
  isDisabled,
  icon,
  onClick
}) => {
  const handleActionClick = (evt: React.MouseEvent<ContainerElement>) => {
    if (isDisabled) {
      evt.preventDefault();
    }

    onClick?.(evt);
  };

  const getElement = (): JSX.Element | string => {
    switch (element) {
      case TypeElement.BUTTON:
        return (
          <button
            id={id}
            className={classNames(cls.button, {}, [cls[className], cls[theme]])}
            type={type || 'button'}
            disabled={isDisabled}
            onClick={(evt) => handleActionClick(evt)}
          >
            {icon && icon}
            {children}
          </button>
        );
      case TypeElement.LINK:
        return (
          <Link
            id={id}
            to={link}
            className={classNames(cls.link, {}, [cls[className], cls[theme]])}
            onClick={(evt) => handleActionClick(evt)}
          >
            {icon && icon}
            {children}
          </Link>
        );
      default:
        throw Error(`Unknown element ${element}`);
    }
  };

  return <>{getElement()}</>;
};
