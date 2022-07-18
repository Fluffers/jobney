import type { LinksFunction, MetaFunction } from '@remix-run/node';

import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';

import styles from '~/styles/app.output.css';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

export const meta: MetaFunction = () => ({
	charset: 'utf-8',
	title: 'Jobney',
	viewport: 'width=device-width,initial-scale=1',
});

const Screen = () => {
	return (
		<html
			lang="en"
			className="bg-gray-200"
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
