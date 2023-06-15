import { createSlice } from '@reduxjs/toolkit';

import { NameSpace } from 'constants/constants';

interface InitialState {
  isOpened: boolean;
  type: null | string;
}

const initialState: InitialState = {
  isOpened: false,
  type: null
};

export const modalSlice = createSlice({
  name: NameSpace.MODAL,
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.isOpened = true;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- Allow in this file
      state.type = action.payload.type;
    },
    hideModal: (state) => {
      state.isOpened = false;
      state.type = null;
    }
  }
});

export const { showModal, hideModal } = modalSlice.actions;

// eslint-disable-next-line import/no-default-export -- Allow in this file
export default modalSlice.reducer;
