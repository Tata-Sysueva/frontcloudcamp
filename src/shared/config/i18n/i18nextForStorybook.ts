import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import ru from './locales/ru.json';

const namespaces = Object.keys(en);

// eslint-disable-next-line @typescript-eslint/no-floating-promises -- Alow next line
i18n.use(initReactI18next).init({
  fallbackLng: ['en'],
  partialBundledLanguages: true,
  lng: 'en',
  resources: {
    en,
    ru
  },

  ns: namespaces,
  defaultNS: 'translations',
  debug: !!__IS_DEV__,

  interpolation: {
    // not needed for react!
    escapeValue: false
  },

  react: {
    useSuspense: false
  }
});

// eslint-disable-next-line import/no-default-export -- Allow next line
export default i18n;
