import { combineReducers } from '@reduxjs/toolkit';

import { NameSpace } from 'constants/constants';

import formSlice from './formSlice/formSlice';
import modalSlice from './modalSlice/modalSlice';

export const rootReducer = combineReducers({
  [NameSpace.MODAL]: modalSlice,
  [NameSpace.FORM]: formSlice
});
