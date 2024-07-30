const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './task_5/dashboard/src/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
    },
    devtool: 'inline-source-map',
    devServer: {
	    static: {
	      directory: path.resolve(__dirname, '../dist'), // Replaces contentBase
	    },
	    hot: true, // Enables Hot Module Replacement
	    client: {
	      logging: 'info', // Logging level for the client
	    },
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './task_5/dashboard/dist/index.html',
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
    module: {
        rules: [
	      {
		test: /\.js$/,
		exclude: /node_modules/,
		use: 'babel-loader',
	      },
	      {
		test: /\.css$/,
		use: ['style-loader', 'css-loader'],
	      },
	      {
		test: /\.(png|svg|jpg|gif)$/,
		use: [
		  {
		    loader: 'file-loader',
		    options: {
		      name: '[name].[ext]',
		      outputPath: 'images/',
			    },
		  },
		],
	      },
    	],
    },
    performance: {
        maxAssetSize: 1000000,
    },
};

