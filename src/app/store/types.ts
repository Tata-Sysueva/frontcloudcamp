export interface FormDataTypeApi {
  tel: string | null;
  email: string | null;
  nickname: string | null;
  name: string | null;
  surname: string | null;
  about: string | null;
  advantages: (string | null)[] | null;
  sex: 'man' | 'woman' | null;
  radio: number | null;
  checkboxes: number[] | null;
}
