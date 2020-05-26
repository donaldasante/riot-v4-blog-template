const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const path = require('path');

const webpackDevServerPort = 8080;

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        open: true,
        clientLogLevel: 'info',
        compress: true,
        host: '127.0.0.1',
        hot: true,
        watchOptions: {
            poll: true
        },
        progress: false,
        contentBase: path.join(__dirname, "public"),
        publicPath: '/',
        port: webpackDevServerPort,
        historyApiFallback: {
            index: 'index.html'
        }
    }

});