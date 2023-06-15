import { useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Checkbox.module.scss';

interface CheckboxProps {
  id: string;
  description: string | number;
  onCheck: (id: string) => void;
}

export const Checkbox = ({ id, description, onCheck }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label
      className={cls.checkboxWrapper}
      htmlFor={id}
    >
      <input
        id={id}
        type="checkbox"
        onChange={() => {
          setIsChecked(!isChecked);
          onCheck(id);
        }}
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
  );
};
