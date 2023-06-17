import React, {
  type ChangeEvent,
  useState,
  type TextareaHTMLAttributes
} from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Textarea.module.scss';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  className?: string;
  placeholder?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ id, className = '', placeholder = 'Placeholder', ...otherProps }, ref) => {
    const [textLength, setTextLength] = useState(0);

    return (
      <>
        <textarea
          {...otherProps}
          ref={ref}
          id={id}
          className={classNames(cls.field, {}, [cls[className]])}
          placeholder={placeholder}
          onChange={(evt: ChangeEvent<HTMLTextAreaElement>) =>
            setTextLength(evt.target.value.trim().length)
          }
        />
        <span
          className={classNames(
            cls.counter,
            {
              [cls.counterError]: textLength > 200
            },
            []
          )}
        >{`${textLength}/200`}</span>
      </>
    );
  }
);
