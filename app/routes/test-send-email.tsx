import type { LoaderArgs } from '@remix-run/node';

import { json } from '@remix-run/node';

import { sendEmail } from '~/utils/mail.server';

export const loader = async ({ request }: LoaderArgs) => {
	const email = new URL(request.url).searchParams.get('email');

	if (!email) return json({}, 400);

	await sendEmail({
		html: '<h1>Example test email</h1',
		receiver: email,
		plainTextVersion: 'Example test email',
		senderName: 'Example',
		subject: 'Example test email',
	});

	return json({});
};
