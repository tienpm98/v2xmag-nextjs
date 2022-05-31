module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],

	theme: {
		extend: {
			flex: {
				50: '1 1 50%',
				'scroll-horizontal-80': '0 0 80%',
				3: '1 0 30%',
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
				5: '5px',
				6: '6px',
				7: '7px',
				8: '8px',
				10: '10px',
				12: '12px',
				14: '14px',
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
				35: '35px',
				36: '36px',
				40: '40px',
				45: '45px',
				47: '47px',
				50: '50px',
				52: '52px',
				56: '56px',
				60: '60px',
				65: '65px',
				70: '70px',
				75: '75px',
				80: '80px',
				88: '88px',
				90: '90px',
				100: '100px',
				102: '102px',
				110: '110px',
				131: '131px',
				140: '140px',
				200: '200px',
				205: '205px',
				250: '250px',
				300: '300px',
				350: '350px',
				500: '500px',
				'10-percen': '10%',
				'40-percent': '40%',
				'50-percent': '50%',
			},
			gap: {
				10: '10px',

				20: '20px',
				26: '26px',
				30: '30px',
				35: '35px',
			},
			letterSpacing: {
				tighter: '-.04em',
			},
			borderRadius: {
				5: '5px',
			},
			fontSize: {
				12: '12px',
				15: '15px',
				17: '17px',
				20: '20px',
				25: '25px',
				40: '40px',
				45: '45px',
				60: '60px',
				100: '100px',
			},
			zIndex: {
				'-1': -1,
			},
			lineHeight: {
				base: '24px',
				tight: '87.5%',
				topTitle: '47px',
				extra: '200%',
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
			width: {
				190: '190px',
				545: '545px',
				300: '300px',
			},
			height: {
				5: '5px',
				128: '560px',
				190: '190px',
				364: '364px',
			},
			minHeight: {
				318: '318px',
			},
			minWidth: {
				200: '200px',
				205: '205px',
				300: '300px',
			},

			opacity: {
				50: '.5',
				60: '.6',
				70: '.7',
				80: '.8',
				90: '.9',
				100: '1',
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
