import { configureStore } from '@reduxjs/toolkit';

import { rootAPISlice } from './api';
import { rootReducer } from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rootAPISlice.middleware)
});
