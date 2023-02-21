const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        assetModuleFilename: 'images/[hash][ext][query]'
    },
    mode: 'production',
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.css|.sass$/i,
                use: [MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
                ],
            },
            {
                test: /\.(png|svg)$/i,
                type: 'asset/inline',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
    ]
}