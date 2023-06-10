import { combineReducers } from '@reduxjs/toolkit';

import { NameSpace } from 'app/constants/constants';

import modalSlice from './modalSlice/modalSlice';

export const rootReducer = combineReducers({
  [NameSpace.MODAL]: modalSlice
});
