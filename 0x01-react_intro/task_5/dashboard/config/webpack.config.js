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
        static: path.join(__dirname, '../dist'),
        open: true,
        port: 8564,
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
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
            {
                test: /\.(?:ico|gif|png|jpe?g|svg)$/i,
                type: 'asset/resource',
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                            disable: true,
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

