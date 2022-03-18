const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
    mode: "development",
    entry: "./worker.js",
    plugins: [
        new Dotenv(),
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: 'body',
            enviroment: process.env.BACKEND_HOST,
        }),
        new CopyPlugin({ patterns: ['./manifest.json'] }),
    ]
}
