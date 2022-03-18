const CopyPlugin = require("copy-webpack-plugin");
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
    mode: "development",
    entry: "./worker.js",
    output: {
        filename: 'worker.js',
        path: path.resolve(__dirname, 'build'),
    },
    plugins: [
        new Dotenv(),
        new HtmlWebpackPlugin({
            template: './main.html',
            inject: 'body',
            enviroment: process.env.BACKEND_HOST,
        }),
        new CopyPlugin({ patterns: ['./manifest.json'] }),
    ]
}
