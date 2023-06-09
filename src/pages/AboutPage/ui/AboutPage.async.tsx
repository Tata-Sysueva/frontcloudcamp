import { lazy } from 'react';

export const AboutPageAsync = lazy(() =>
  import('./AboutPage').then((module) => ({ default: module.AboutPage }))
);
