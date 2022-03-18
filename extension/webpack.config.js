const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: "development",
    entry: "./worker.js",
    output: {
        filename: 'worker.js',
        path: path.resolve(__dirname, 'build'),
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './main.html' }),
        new CopyPlugin({ patterns: ['./manifest.json'] }),
    ]
}
