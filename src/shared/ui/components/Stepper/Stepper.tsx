import { Step } from './Step';
import cls from './Stepper.module.scss';

interface StepperProps {
  labelArray: number[];
  currentStep: number;
  updateStep: (step: number) => void;
  completed: string;
}

export const Stepper = ({
  labelArray,
  currentStep,
  updateStep,
  completed
}: StepperProps) => (
  <div className={cls.stepperWrapper}>
    <div className={cls.progress}>
      <div
        className={cls.complitedProgress}
        style={{ width: `${completed}` }}
      />
    </div>
    <div className={cls.stepWrapper}>
      {labelArray.map((id, index) => (
        <Step
          key={id}
          index={index}
          label={index + 1}
          isPrevious={id < currentStep}
          isSelected={currentStep === index + 1}
          updateStep={updateStep}
        />
      ))}
    </div>
  </div>
);
