import { classNames } from 'shared/lib/classNames/classNames';

import cls from './RadioButton.module.scss';

interface RadioButtonProps {
  id: string;
  isValue: boolean;
  description: string | number;
  onChange: (id: string) => void;
}

export const RadioButton = ({
  id,
  isValue,
  description,
  onChange
}: RadioButtonProps) => (
  <label
    className={cls.radioButtonWrapper}
    htmlFor={id}
  >
    <input
      id={id}
      type="radio"
      value={id}
      checked={isValue}
      onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
        onChange(evt.target.value)
      }
    />
    <span
      className={classNames(
        cls.radioButton,
        { [cls['radioButton--active']]: isValue },
        []
      )}
      aria-hidden="true"
    />
    {description}
  </label>
);
