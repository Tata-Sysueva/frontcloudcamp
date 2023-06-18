import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import isEqual from 'lodash/isEqual';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'app/hooks';
import { useAdapter } from 'app/hooks/useAdapter';
import { usePostFormDataMutation } from 'app/store/api';
import {
  resetFormInfo,
  setFormInfo
} from 'app/store/slices/formSlice/formSlice';
import { selectFormInfo } from 'app/store/slices/formSlice/selectors';
import { showModal } from 'app/store/slices/modalSlice/modalSlice';
import { type FormFieldsData } from 'app/types/redux';
import { TypeModal } from 'constants/constants';
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
  const { formData: formDataApi } = useAdapter();

  const dispatch = useAppDispatch();
  const formData = useAppSelector(selectFormInfo);

  const [postFormData, { isLoading }] = usePostFormDataMutation();

  const methods = useForm({
    defaultValues: getInitialFormState(formData),
    mode: 'onBlur',
    resolver: zodResolver(FormDataValidationShema)
  });

  const { reset } = methods;

  const Content = formOfStep[currentStep];

  const updateStep = (step: number) => {
    updateCurrentStep(step);
  };

  const handleBackButtonClick = () =>
    currentStep === Steps.StepOne
      ? navigate(-1)
      : updateCurrentStep(currentStep - 1);

  const handleButtonNextClick = async (formDataUpdate: FormFieldsData) => {
    dispatch(setFormInfo({ ...formDataUpdate }));

    if (currentStep < Steps.StepThree) {
      updateCurrentStep(currentStep + 1);
    }

    if (currentStep === Steps.StepThree) {
      try {
        await postFormData(formDataApi);
        reset();
        dispatch(resetFormInfo());
        dispatch(showModal({ type: TypeModal.Success }));
      } catch (e) {
        console.error(e);
        dispatch(showModal({ type: TypeModal.Error }));
      }
    }
  };

  const getSubmitBtnText = () =>
    isLoading ? t('general_actions:submitting') : t('general_actions:submit');

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
          isDisabled={isLoading}
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

            return handleButtonNextClick({ ...formData, ...updatedForm });
          })}
        >
          {currentStep === Steps.StepThree
            ? getSubmitBtnText()
            : t('general_actions:next')}
        </Button>
      </div>
      <SwitchersBar />
    </div>
  );
};
