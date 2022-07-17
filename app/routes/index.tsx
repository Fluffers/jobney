import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export const loader = () => {
	return json({
		name: 'World',
	});
};

const Screen = () => {
	const data = useLoaderData<typeof loader>();

	return <h1>Hello {data.name}!</h1>;
};

export default Screen;
