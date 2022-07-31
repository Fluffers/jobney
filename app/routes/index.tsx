import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { useTranslation } from 'react-i18next';

export const loader = () => {
	return json({
		name: 'World',
	});
};

const Screen = () => {
	const { name } = useLoaderData<typeof loader>();
	const { t } = useTranslation();

	return <h1>{t('greeting', { name })}</h1>;
};

export default Screen;
