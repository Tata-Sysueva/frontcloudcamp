import { configureStore } from '@reduxjs/toolkit';
import { ApiService } from 'app/api/api';

import { rootReducer } from './rootReducer';

export const api = ApiService;

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      }
    })
});
