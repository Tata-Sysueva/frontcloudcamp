import { type TextareaHTMLAttributes } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Textarea.module.scss';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  className?: string;
  placeholder?: string;
}

export const Textarea = ({
  id,
  className = '',
  placeholder = 'Placeholder',
  ...otherProps
}: TextareaProps) => (
  <textarea
    {...otherProps}
    id={id}
    className={classNames(cls.field, {}, [cls[className]])}
    placeholder={placeholder}
  />
);
