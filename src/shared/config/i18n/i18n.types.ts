import { type ArrayValues } from 'shared/helpers.types';

import { type supportedLocales } from './i18n.constants';
import type en from './locales/en.json';

export type AppLocale = ArrayValues<typeof supportedLocales>;
export type I18nNamespaces = keyof typeof en;
