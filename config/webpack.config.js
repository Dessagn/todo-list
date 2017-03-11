//Import webpack npm module
var webpack = require('webpack');
var path = require('path');

module.exports = {
	//Which file types are in our projest
	//and where theya re located
	resolve: {
		extensions: ['.js', '.jsx'],
		modules: ["src", "node_modules"]

	},
	module:{
		//How to process project files with loaders
		loaders: [
			//process any .js, .jsx files with Babel
			{
				test: /\.jsx?$/,
				loader: ['babel-loader']
			}
		]
	},
	//which file is the entry point to our application
	//context: path.resolve(__dirname, "todo-list"),
	entry:'index.jsx',
	//Where to output the final bundled code
	output: {
		filename: 'app.js',
		path: 'dist'
	}
};