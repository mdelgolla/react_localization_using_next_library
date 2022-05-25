import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    fallbackLng: 'en',
    lng: 'si',
    interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
    resources: {
        en: {
            translations: require('./locals/en.json')
        },
        fr: {
            translations: require('./locals/fr.json')
        },
        si: {
            translations: require('./locals/si.json')
        }
    },
    ns: ['translations'],
    defaultNS: 'translations'
});

i18n.languages = ['en', 'fr','si'];

export default i18n;