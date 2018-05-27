var webpack = require('webpack');

module.exports = {
	entry : './lib/index.js',
	output : {
		filename : './index.js'
	},
	module: {
		rules: [
		  {
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
			  loader: 'babel-loader',
			  options: {
				presets: ['@babel/preset-env']
			  }
			}
		  }
		]
	  }
	
};