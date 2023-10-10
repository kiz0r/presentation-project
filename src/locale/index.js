import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import russianTranslation from './ru';
import englishTranslation from './eng';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: englishTranslation },
    ru: { translation: russianTranslation },
  },
  lng: 'en',
  fallbacking: 'en',
  interpolations: { escapeValue: false },
});
