const path = require('path');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseWebpackConfig = require('./webpack.conf');

const { resolve } = path;
const appPath = resolve(__dirname, '../../app');
const templatePath = resolve(__dirname, '../');

// config.add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach((name) => {
    baseWebpackConfig.entry[name] = [resolve(templatePath, './build/dev-client')].concat(baseWebpackConfig.entry[name]);
});

module.exports = merge(baseWebpackConfig, {
    output: {
        path: resolve(appPath, '__tests__/dist'),
        filename: '[name].[hash].js'
    },
    devtool: '#cheap-module-eval-source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: resolve(appPath, '__tests__/index.html'),
            inject: true,
            filename: resolve(appPath, '__tests__/dist/index.html')
        })
    ],
    devServer: {
        contentBase: path.join(appPath, '__tests__/dist'),
        compress: true,
        port: 7000,
        open: true,
        hot: true,
        host: '0.0.0.0',
        historyApiFallback: true
    }
});
