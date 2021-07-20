'use strict';

const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'public/js/', 'main.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: "/",
        filename: "js/[name].js"
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader?name=../dist/images/[name].[ext]']
            },
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html'), minify: false }),
        new CopyPlugin([
            {
                from: 'public/json',
                to: 'json/[name].[ext]',
                toType: 'template'
            }
        ]),
        new CopyPlugin([
            {
                from: 'public/images',
                to: 'images/[name].[ext]',
                toType: 'template'
            }
        ])
    ]   
};
    