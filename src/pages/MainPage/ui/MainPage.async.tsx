import { lazy } from 'react';

export const MainPageAsync = lazy(() =>
  import('./MainPage').then((module) => ({ default: module.MainPage }))
);
