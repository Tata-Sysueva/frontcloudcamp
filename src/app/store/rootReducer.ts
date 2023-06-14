import { NameSpace } from 'constants/constants';

import { combineReducers } from '@reduxjs/toolkit';

import modalSlice from './modalSlice/modalSlice';

export const rootReducer = combineReducers({
  [NameSpace.MODAL]: modalSlice
});
