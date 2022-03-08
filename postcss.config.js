module.exports = {
	plugins: [
		{
			tailwindcss: {},
			autoprefixer: {},
			...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
		},
		'tailwindcss',
		process.env.NODE_ENV === 'production'
			? [
					'@fullhuman/postcss-purgecss',
					{
						content: [
							'./pages/**/*.{js,jsx,ts,tsx}',
							'./components/**/*.{js,jsx,ts,tsx}',
							'./out/index.html',
							'./out/**/*.html',
						],
						defaultExtractor: (content) =>
							content.match(/[\w-/:]+(?<!:)/g) || [],
					},
			  ]
			: undefined,
		'postcss-preset-env',
	].filter((x) => !!x),
}
