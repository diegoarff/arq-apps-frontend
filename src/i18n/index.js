import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import transEs from './es';
import transEn from './en';

i18n.use(initReactI18next).init({
	lng: 'es',
	fallbackLng: 'es',
	interpolation: {
		escapeValue: false,
	},
	resources: {
		es: {
			translation: transEs,
		},
		en: {
			translation: transEn,
		},
	},
});
