require('dotenv').config()
const withFonts = require('next-fonts')

module.exports = withFonts({
	webpack(config, options) {
		config.node = {
			fs: 'empty',
		}
		config.module.rules.push({
			test: /\.(png|woff|woff2|eot|ttf|svg)$/,
			use: [
				options.defaultLoaders.babel,
				{
					loader: 'url-loader?limit=100000',
				},
				{
					loader: 'file-loader',
				},
			],
		})
		return config
	},
})
module.exports = {
	env: {
		NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN:
			process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
	},

	images: {
		loader: 'akamai',
		path: '/',
	},
}
