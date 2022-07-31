import type { LinksFunction, LoaderArgs, MetaFunction } from '@remix-run/node';

import { json } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from '@remix-run/react';
import { useTranslation } from 'react-i18next';
import { useChangeLanguage } from 'remix-i18next';

import styles from '~/styles/app.output.css';
import { i18n } from '~/utils/i18n.server';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

export const meta: MetaFunction = () => ({
	charset: 'utf-8',
	title: 'Jobney',
	viewport: 'width=device-width,initial-scale=1',
});

export const handle = {
	i18n: 'shared',
};

export const loader = async ({ request }: LoaderArgs) => {
	const locale = await i18n.getLocale(request);

	return json({ locale });
};

const Screen = () => {
	const { locale } = useLoaderData<typeof loader>();
	const { i18n } = useTranslation();

	useChangeLanguage(locale);

	return (
		<html
			lang={locale}
			dir={i18n.dir()}
			className="bg-gray-200 p-4"
		>
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
};

export default Screen;
