import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import isEqual from 'lodash/isEqual';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'app/hooks';
import { setFormInfo } from 'app/store/formSlice/formSlice';
import { selectFormInfo } from 'app/store/formSlice/selectors';
import { AboutInfo } from 'features/AboutInfo';
import { AdvantagesInfo } from 'features/AdvantagesInfo';
import {
  type ChangedFormInfoValues,
  FormDataValidationShema
} from 'features/common.shema';
import { GeneralInfo } from 'features/GeneralInfo';
import { Steps } from 'pages/constans';
import { getInitialFormState } from 'pages/utils';
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

  const dispatch = useAppDispatch();
  const formData = useAppSelector(selectFormInfo);

  const methods = useForm({
    defaultValues: getInitialFormState(formData),
    mode: 'onBlur',
    resolver: zodResolver(FormDataValidationShema)
  });

  const Content = formOfStep[currentStep];

  const updateStep = (step: number) => {
    updateCurrentStep(step);
  };

  const handleBackButtonClick = () =>
    currentStep === Steps.StepOne
      ? navigate(-1)
      : updateCurrentStep(currentStep - 1);

  return (
    <div className={cls.pageWrapper}>
      <Stepper
        labelArray={Object.values(Steps)}
        completed={getCompletedWidth(currentStep)}
        currentStep={currentStep}
        updateStep={updateStep}
      />

      <FormProvider {...methods}>
        <Content />
      </FormProvider>

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
          onClick={methods.handleSubmit((data) => {
            const initialValues = getInitialFormState(formData);
            const updatedForm = (
              Object.keys(data) as (keyof typeof data)[]
            ).reduce<ChangedFormInfoValues>((acc, key) => {
              const currentValue = data[key];
              const initialValue = initialValues[key];

              if (!isEqual(currentValue, initialValue)) {
                (acc[key] as typeof currentValue) = currentValue;
              }

              return acc;
            }, {});

            dispatch(setFormInfo({ ...formData, ...updatedForm }));

            if (currentStep < Steps.StepThree) {
              updateCurrentStep(currentStep + 1);
            }
          })}
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
