/*
 * @Author: lijy
 * 将文件名改为 webpack.config.js
 */
const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: '.src/js/demo.js',
    output: {
        filename: '[name]_dist.js',
        path: path.resolve(__dirname, 'dist3')
    },
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /.js$/,
                use: 'babel-loader'
            },
            {
                test: /.css$/,
                use: [
                    'style-loader', 
                    'css-loader'
                ]
            },
            {
                test: /.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /.(png|jpg|jpeg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10240 * 10
                    }
                }
            },
            {
                test: /.(woff|woff2|eto|ttf|otf)$/,
                use: 'file-loader'
            }
        ]
    },
    // plugins: [
    //     new webpack.HotModuleReplacementPlugin()
    // ],
    devServer: {
        contentBase: './dist3',
        hot: true
    }
}