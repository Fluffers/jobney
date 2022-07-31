import type { LoaderArgs } from '@remix-run/node';

const fetchSelf = async (request: Request) => {
	const host = request.headers.get('host') ?? '';
	const selfURL = new URL('/', `https://${host}`);
	const response = await fetch(selfURL.toString(), { method: 'HEAD' });

	if (!response.ok) throw new Error('Self head fetch failed');
};

export const loader = async ({ request }: LoaderArgs) => {
	try {
		await fetchSelf(request);

		return new Response('OK', { status: 204 });
	} catch {
		return new Response('FAIL', { status: 500 });
	}
};
