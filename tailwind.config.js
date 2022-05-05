module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],

	theme: {
		extend: {
			flex: {
				50: '1 1 50%',
			},
			colors: {
				'accent-1': '#FAFAFA',
				'accent-2': '#EAEAEA',
				'accent-7': '#333',
				success: '#0070f3',
				cyan: '#79FFE1',
				'gray-menu': '#DADADA',
				'gray-8': '#888888',
			},
			spacing: {
				6: '6px',
				10: '10px',
				12: '12px',
				15: '15px',
				16: '16px',
				18: '18px',
				20: '20px',
				23: '23px',
				24: '24px',
				25: '25px',
				26: '26px',
				27: '27px',
				28: '7rem',
				30: '30px',
				40: '40px',
				45: '45px',
				50: '50px',
				60: '60px',
				250: '250px',
				350: '350px',
				'10-percen': '10%',
			},
			gap: {
				20: '20px',
				26: '26px',
				30: '30px',
				35: '35px',
			},
			letterSpacing: {
				tighter: '-.04em',
			},
			fontSize: {
				15: '15px',
				20: '20px',
				40: '40px',
				45: '45px',
				60: '60px',
				100: '100px',
			},
			zIndex: {
				'-1': -1,
			},
			lineHeight: {
				tight: '87.5%',
				topTitle: '47px',
			},
			fontFamily: {
				displayNormal: 'HelveticaNowDisplay',
				black: 'HelveticaNowDisplayBlack',
			},
			backgroundColor: {
				blur: 'rgba(255, 255, 255, 0.9)',
			},
			borderWidth: {
				DEFAULT: '1px',
				0: '0',
				section: '0.5px',
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
