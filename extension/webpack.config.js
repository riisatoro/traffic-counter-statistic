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
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new CopyPlugin({ patterns: ['./authentication.js'] }),
        new CopyPlugin({ patterns: ['./manifest.json'] }),
        new CopyPlugin({ patterns: ['./main.css'] }),
        new HtmlWebpackPlugin({ template: './index.html' }),
    ]
}
