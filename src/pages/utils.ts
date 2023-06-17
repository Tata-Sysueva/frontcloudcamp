import { type FormFieldsData } from 'app/types/redux';

export const getInitialContactState = (formData: FormFieldsData) => ({
  tel: formData.tel,
  email: formData.email
});

export const getInitialFormState = (formData: FormFieldsData) => ({
  nickname: formData.nickname,
  name: formData.name,
  surname: formData.surname,
  sex: formData.sex,
  advantages: formData.advantages,
  about: formData.about
});
