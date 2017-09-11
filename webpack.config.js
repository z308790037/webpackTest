var path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry:"./app/index.js",
	output:{
		path:path.resolve(__dirname,"build"),
		filename:"build.js"
	},
	module:{
		loaders:[
			{
				test:/.css$/,
				loaders:["style-loader","css-loader"],
				exclude:'/node_moduls/'
			}
		]
	},
	resolve:{
		extensions:[".css",".js"]
	},
	devServer: {
		hot:true,
	    inline: true
	}

}