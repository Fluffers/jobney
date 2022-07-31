import { RemixBrowser } from '@remix-run/react';
import i18next, { use } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { getInitialNamespaces } from 'remix-i18next';

import { i18nConfig } from '~/utils/i18n';

(async () => {
	const i18nInstance = use(initReactI18next).use(LanguageDetector).use(Backend);

	await i18nInstance.init({
		...i18nConfig,
		ns: getInitialNamespaces(),
		backend: {
			loadPath: '/locales/{{lng}}/{{ns}}.json',
		},
		detection: {
			order: ['htmlTag'],
			caches: [],
		},
	});

	hydrateRoot(
		document,
		<StrictMode>
			<I18nextProvider i18n={i18next}>
				<RemixBrowser />
			</I18nextProvider>
		</StrictMode>,
	);
})();
