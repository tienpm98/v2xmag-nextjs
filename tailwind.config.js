module.exports = {
	mode: 'jit',
	enabled: process.env.NODE_ENV === 'production',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./out/index.html',
		'./out/**/*.{js,html}',
	],
	safelist: [
		'leading-87.5',
		'text-20',
		'text-60',
		'text-100',
		'min-w-300',
		'z-[-1]',
		'text-black',
	],
	theme: {
		extend: {
			colors: {
				'accent-1': '#FAFAFA',
				'accent-2': '#EAEAEA',
				'accent-7': '#333',
				success: '#0070f3',
				cyan: '#79FFE1',
			},
			spacing: {
				28: '7rem',
			},
			letterSpacing: {
				tighter: '-.04em',
			},
			fontSize: {
				20: '20px',
				60: '60px',
				100: '100px',
			},
			zIndex: {
				'-1': '-1',
			},
			lineHeight: {
				87.5: '87.5%',
			},
			fontFamily: {
				normal: 'HelveticaNowDisplay',
				black: 'HelveticaNowDisplayBlack',
			},
			backgroundColor: {
				blur: 'rgba(255, 255, 255, 0.9)',
			},
			boxShadow: {
				small: '0 5px 10px rgba(0, 0, 0, 0.12)',
				medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
			},
			height: {
				128: '560px',
			},
			minWidth: {
				300: '300px',
			},
			typography: {
				lg: {
					css: {
						img: {
							marginTop: '0',
							marginBottom: '0',
						},
					},
				},
			},
		},
	},
	variants: {
		extend: {},
	},

	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
