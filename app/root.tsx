import type { MetaFunction } from '@remix-run/node';

import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';

export const meta: MetaFunction = () => ({
	charset: 'utf-8',
	title: 'Jobney',
	viewport: 'width=device-width,initial-scale=1',
});

const Screen = () => {
	return (
		<html lang="en">
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
