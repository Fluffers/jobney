// eslint-disable-next-line no-undef, unicorn/prefer-module
module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:jsx-a11y/strict',
		'plugin:unicorn/recommended',
		'plugin:prettier/recommended',
	],
	plugins: ['@typescript-eslint'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	rules: {
		'react/self-closing-comp': [
			'error',
			{
				component: true,
				html: true,
			},
		],
		'newline-after-var': 2,
		'@typescript-eslint/consistent-type-imports': 2,
		'@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
		'@typescript-eslint/array-type': ['error', { default: 'generic' }],
		'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
		'@typescript-eslint/no-redeclare': ['error', { ignoreDeclarationMerge: false }],
		'import/order': [
			'error',
			{
				groups: ['type', 'builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
				'newlines-between': 'always',
				alphabetize: { order: 'asc', caseInsensitive: true },
			},
		],
		'no-restricted-imports': [
			'error',
			{
				patterns: [
					{
						group: ['.*'],
						message: "Don't use relative imports",
					},
				],
			},
		],
		'unicorn/no-null': 'off',
		'unicorn/prevent-abbreviations': 'off',
		'unicorn/text-encoding-identifier-case': 'off',
		'unicorn/filename-case': 'off',
		'unicorn/expiring-todo-comments	': 'off',
		'unicorn/no-array-for-each': 'off',
		'unicorn/no-array-reduce': 'off',
		'unicorn/no-await-expression-member': 'off',
		'unicorn/no-keyword-prefix': 'error',
		'unicorn/no-nested-ternary': 'off',
		'unicorn/no-unreadable-array-destructuring': 'off',
		'unicorn/no-unreadable-iife': 'off',
		'unicorn/no-unsafe-regex': 'error',
		'unicorn/prefer-query-selector': 'off',
		'unicorn/prefer-type-error': 'off',
	},
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
			},
		},
		react: {
			version: 'detect',
		},
	},
	overrides: [
		{
			extends: ['plugin:@typescript-eslint/recommended-requiring-type-checking', 'plugin:@typescript-eslint/strict'],
			files: ['*.ts', '*.tsx'],
			parserOptions: {
				project: ['./tsconfig.json'],
			},
		},
	],
};
