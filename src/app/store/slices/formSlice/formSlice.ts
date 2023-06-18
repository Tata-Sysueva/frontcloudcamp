import { createSlice } from '@reduxjs/toolkit';

import { type FormDataType } from 'app/types/redux';
import { NameSpace } from 'constants/constants';
import { UserData } from 'mocks/userData';

const initialState: FormDataType = {
  formData: {
    tel: UserData.tel,
    email: UserData.email,
    nickname: UserData.nickname,
    name: UserData.name,
    surname: UserData.surname,
    about: UserData.about,
    sex: UserData.sex,
    advantages: UserData.advantages,
    radio: UserData.radio,
    checkboxes: UserData.checkboxes
  }
};

export const formSlice = createSlice({
  name: NameSpace.FORM,
  initialState,
  reducers: {
    setFormInfo: (state, action) => {
      state.formData = action.payload;
    },
    resetFormInfo: (state) => {
      state.formData = initialState.formData;
    }
  }
});

export const { setFormInfo, resetFormInfo } = formSlice.actions;

// eslint-disable-next-line import/no-default-export -- Allow in this file
export default formSlice.reducer;
