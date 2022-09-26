module.exports = {
	plugins: [
		'tailwindcss',

		process.env.NODE_ENV === 'production'
			? [
					'@fullhuman/postcss-purgecss',
					{
						content: [
							'./pages/**/*.{js,jsx,ts,tsx}',
							'./components/**/*.{js,jsx,ts,tsx}',
							'./out/index.html',
							'./out/**/*.{js, html}',
						],
						defaultExtractor: (content) =>
							content.match(/[\w-/:]+(?<!:)/g) || [],
					},
			  ]
			: undefined,
		'postcss-preset-env',
		'postcss-nesting',
	].filter((x) => !!x),
}
