import { useAppSelector } from 'app/hooks';
import { selectFormInfo } from 'app/store/slices/formSlice/selectors';

export const useAdapter = () => {
  const { advantages, sex, radio, checkboxes, ...payload } =
    useAppSelector(selectFormInfo);

  const updatedAdvantages =
    advantages && advantages.map((item) => item.advantage).filter(Boolean);
  const updatedSex = sex ? sex.value : null;
  const updatedRadio = radio !== null ? Number(radio) : null;
  const updatedCheckboxes =
    checkboxes && checkboxes.length > 0
      ? checkboxes.map((item) => Number(item))
      : null;

  return {
    formData: {
      advantages: updatedAdvantages,
      sex: updatedSex,
      radio: updatedRadio,
      checkboxes: updatedCheckboxes,
      ...payload
    }
  };
};
