import { lazy } from 'react';

export const CreatePageAsync = lazy(() =>
  import('./CreatePage').then((module) => ({ default: module.CreatePage }))
);
