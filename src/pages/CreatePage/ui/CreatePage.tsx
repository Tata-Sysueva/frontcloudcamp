import { useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { AboutInfo } from 'features/AboutInfo';
import { AdvantagesInfo } from 'features/AdvantagesInfo';
import { GeneralInfo } from 'features/GeneralInfo';
import { Steps } from 'pages/constans';
import { Button } from 'shared/ui/components/Button/Button';
import { Stepper } from 'shared/ui/components/Stepper/Stepper';
import { ThemeButton, TypeElement } from 'shared/ui/constants/constants';
import { SwitchersBar } from 'widgets/SwitchersBar';

import cls from './CreatePage.module.scss';
import { getCompletedWidth } from '../utils';

const formOfStep = {
  [Steps.StepOne]: GeneralInfo,
  [Steps.StepTwo]: AdvantagesInfo,
  [Steps.StepThree]: AboutInfo
};

export const CreatePage = () => {
  const [currentStep, updateCurrentStep] = useState(Steps.StepOne);
  const navigate = useNavigate();
  const [t] = useTranslation();

  const Content = formOfStep[currentStep];

  const updateStep = (step: number) => {
    updateCurrentStep(step);
  };

  const handleBackButtonClick = () =>
    currentStep === Steps.StepOne
      ? navigate(-1)
      : updateCurrentStep(currentStep - 1);

  const handleNextButtonClick = () =>
    currentStep === Steps.StepThree
      ? console.debug('Submit data, open modal')
      : updateCurrentStep(currentStep + 1);

  return (
    <div className={cls.pageWrapper}>
      <Stepper
        labelArray={Object.values(Steps)}
        completed={getCompletedWidth(currentStep)}
        currentStep={currentStep}
        updateStep={updateStep}
      />

      <Content />

      <div className={cls.footer}>
        <Button
          id="button-back"
          element={TypeElement.BUTTON}
          theme={ThemeButton.OUTLINE}
          onClick={handleBackButtonClick}
        >
          {t('general_actions:back')}
        </Button>
        <Button
          id="button-next"
          element={TypeElement.BUTTON}
          theme={ThemeButton.PRIMARY}
          onClick={handleNextButtonClick}
        >
          {currentStep === 3
            ? t('general_actions:submit')
            : t('general_actions:next')}
        </Button>
      </div>
      <SwitchersBar />
    </div>
  );
};
