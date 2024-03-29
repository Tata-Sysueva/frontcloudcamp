import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeButton, TypeElement } from 'shared/ui/constants/constants';

import cls from './Stepper.module.scss';
import { ReactComponent as TikIcon } from '../../../assets/icons/tik-icon.svg';
import { Button } from '../Button/Button';

interface StepProps {
  className?: string;
  isPrevious: boolean;
  isSelected: boolean;
  index: number;
  updateStep: (step: number) => void;
  label?: string | number;
}

export const Step = ({
  className = '',
  isPrevious,
  isSelected,
  index,
  updateStep,
  label
}: StepProps) => (
  <div
    className={classNames(
      cls.stepBlock,
      { [cls.selected]: isSelected, [cls.complited]: isPrevious },
      [cls[className]]
    )}
  >
    <Button
      element={TypeElement.BUTTON}
      theme={ThemeButton.CLEAR}
      className="circleWrapper"
      onClick={() => updateStep(index + 1)}
    >
      <div className={cls.circle}>{isPrevious && <TikIcon />}</div>
    </Button>
    {label !== undefined && <div className={cls.stepLabel}>{label}</div>}
  </div>
);
