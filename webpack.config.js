const path = require('path');
const webpack = require('webpack');
module.exports = {
	entry: {
		doc: ['babel-polyfill','./examples/index.js']
	},
	output: {
		filename: '[name].js',
		publicPath: "/js/",
		path: path.resolve(__dirname, 'examples/js')
	},
	watch: true,
	devtool: "eval-source-map",
	plugins: [
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify("DEV"),
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: ["vendor", "manifest"],
			minChunks: function (module) {
				// this assumes your vendor imports exist in the node_modules directory, 把所有node_modules下的文件一律加入类库包
				return module.context && module.context.indexOf('node_modules') !== -1;
			}
		})
	],
	module: {
		rules: [{
			test: [/.jsx?$/, /.js?$/],
			loader: 'babel-loader',
			exclude: '/node_modules'
		}, {
			test: [/.hbs?$/, /.handlebars?$/],
			loader: 'handlebars-loader',
			exclude: '/node_modules'
		}, {
			test: [/\.pcss/, /\.css/],
			use: [
				'style-loader',
				'css-loader?importLoaders=1'
			]
		}]
	}
};