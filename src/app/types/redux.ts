import { type store } from 'app/store';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AdvantagesType = {
  id?: number | undefined;
  advantage: string | null;
};

export interface FormFieldsData {
  tel: null | string;
  email: null | string;
  nickname: null | string;
  name: null | string;
  surname: null | string;
  about: null | string;
  sex: {
    value: 'man' | 'woman';
    label: string;
  } | null;
  advantages: AdvantagesType[] | null;
  radio: number | string | null;
  checkboxes: number[] | string[] | null;
}

export interface FormDataType {
  formData: FormFieldsData;
}
