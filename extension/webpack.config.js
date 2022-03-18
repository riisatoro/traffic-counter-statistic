const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
require('dotenv').config()


module.exports = {
    mode: "development",
    entry: "./main.js",
    resolve: {
        extensions: [".js", ".html"],
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new CopyPlugin({ patterns: ['./manifest.json'] }),
        new webpack.DefinePlugin({
            "host": process.env.BACKEND_HOST,
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: true,
        }),
    ]
}

