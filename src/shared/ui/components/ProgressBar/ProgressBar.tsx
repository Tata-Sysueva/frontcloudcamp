import cls from './ProgressBar.module.scss';
import { Step } from './Step';

interface ProgressBarProps {
  labelArray: number[];
  currentStep: number;
  updateStep: (step: number) => void;
  completed: string;
}

export const ProgressBar = ({
  labelArray,
  currentStep,
  updateStep,
  completed
}: ProgressBarProps) => (
  <div className={cls.progressBarWrapper}>
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
