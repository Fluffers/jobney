import type { EntryContext } from '@remix-run/node';

import { resolve } from 'node:path';

import { RemixServer } from '@remix-run/react';
import { createInstance } from 'i18next';
import Backend from 'i18next-fs-backend';
import { renderToString } from 'react-dom/server';
import { I18nextProvider, initReactI18next } from 'react-i18next';

import { i18nConfig } from '~/utils/i18n';
import { i18n } from '~/utils/i18n.server';

const handleRequest = async (
	request: Request,
	responseStatusCode: number,
	responseHeaders: Headers,
	remixContext: EntryContext,
) => {
	const instance = createInstance();
	const language = await i18n.getLocale(request);
	const namespaces = i18n.getRouteNamespaces(remixContext);

	await instance
		.use(initReactI18next)
		.use(Backend)
		.init({
			...i18nConfig,
			lng: language,
			ns: namespaces,
			backend: {
				loadPath: resolve('./public/locales/{{lng}}/{{ns}}.json'),
			},
		});

	const markup = renderToString(
		<I18nextProvider i18n={instance}>
			<RemixServer
				context={remixContext}
				url={request.url}
			/>
		</I18nextProvider>,
	);

	responseHeaders.set('Content-Type', 'text/html');

	return new Response('<!DOCTYPE html>' + markup, {
		status: responseStatusCode,
		headers: responseHeaders,
	});
};

export default handleRequest;
