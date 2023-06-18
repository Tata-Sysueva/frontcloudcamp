import { combineReducers } from '@reduxjs/toolkit';

import { NameSpace } from 'constants/constants';

import { rootAPISlice } from './api';
import formSlice from './slices/formSlice/formSlice';
import modalSlice from './slices/modalSlice/modalSlice';

export const rootReducer = combineReducers({
  [NameSpace.MODAL]: modalSlice,
  [NameSpace.FORM]: formSlice,
  [rootAPISlice.reducerPath]: rootAPISlice.reducer
});
