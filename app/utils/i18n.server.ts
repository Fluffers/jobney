import { resolve } from 'node:path';

import Backend from 'i18next-fs-backend';
import { RemixI18Next } from 'remix-i18next';

import { i18nConfig } from '~/utils/i18n';

export const i18n = new RemixI18Next({
	detection: {
		supportedLanguages: i18nConfig.supportedLngs,
		fallbackLanguage: i18nConfig.fallbackLng,
	},
	i18next: {
		...i18nConfig,
		backend: {
			loadPath: resolve('./public/locales/{{lng}}/{{ns}}.json'),
		},
	},
	backend: Backend,
});
