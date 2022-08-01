import 'react-i18next';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import shared from 'public/locales/en/shared.json';

declare module 'react-i18next' {
	interface CustomTypeOptions {
		defaultNS: 'shared';
		resources: {
			shared: typeof shared;
		};
	}
}
