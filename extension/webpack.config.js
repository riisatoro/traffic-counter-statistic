const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
require('dotenv').config()


module.exports = {
    mode: "production",
    entry: "./main.js",
    resolve: {
        extensions: [".js", ".html"],
    },
    output: {
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                exclude: /\.html$/
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new CopyPlugin({ patterns: ['./manifest.json'] }),
        new CopyPlugin({ patterns: ['./main.css'] }),
        new HtmlWebpackPlugin({
            template: './index.html',
            host: JSON.stringify(process.env.BACKEND_HOST),
        }),
    ]
}
