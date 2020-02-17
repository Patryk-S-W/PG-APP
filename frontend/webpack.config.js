var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	mode: 'development',
	resolve: {
		extensions: [ '.js', '.jsx' ]
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader'
			},
			{
				test: /\.scss/,
				exclude: /node_modules/,
				loader:
					'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap&includePaths[]=node_modules/compass-mixins/lib'
			},
			{ test: /\.css$/, loader: 'style-loader!css-loader' }
		]
	},
	resolve: {
		extensions: [ '.js', '.jsx' ],
		alias: {
			'@': path.resolve(__dirname, 'src/')
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	],
	devServer: {
		historyApiFallback: true
	},
	externals: {
		// global app config object
		config: JSON.stringify({
			apiUrl: 'http://localhost:4000'
		})
	}
};
