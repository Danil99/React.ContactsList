const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	entry: './src/App.jsx',
	output: {
		path: __dirname + "/public",
		filename: 'bundle.js'
	},
	module: {
		rules: [
		{
			test: /\.jsx?$/,
			exclude: [/node_modules/],
			use: [{
				loader: 'babel-loader',
				options: {
					presets:['react', 'es2015']
				}
			}]
		},
		{
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: 'css-loader'
			})
		}
		]
	},
	plugins: [
	  new ExtractTextPlugin('styles.css')
	]
}
