/* eslint-disable unicorn/prefer-module, no-undef */
module.exports = {
	printWidth: 120,
	tabWidth: 2,
	useTabs: true,
	semi: true,
	singleQuote: true,
	trailingComma: 'all',
	bracketSpacing: true,
	arrowParens: 'avoid',
	singleAttributePerLine: true,
	plugins: [require('prettier-plugin-tailwindcss')],
};
