const path = require('path');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const baseWebpackConfig = require('./webpack.conf');

const {resolve} = path;
const appPath = resolve(__dirname, '../../app');
const OUTPUT_PATH = path.resolve('./dist');

String.prototype.toCamelCase = function() {
    return this.replace(/^([A-Z])|\s(\w)/g, (match, p1, p2) => {
        if (p2) {
            return p2.toUpperCase();
        }
        return p1.toLowerCase();
    });
};

module.exports = merge(baseWebpackConfig, {
    mode: 'production',
    entry: {
        main: resolve(appPath, 'index.js')
    },
    output: {
        path: OUTPUT_PATH,
        filename: '{{{suiteName}}}.js',
        library: '{{{suiteName}}}'.toCamelCase(),
        libraryTarget: 'umd'
    },
    plugins: [
        new CleanWebpackPlugin()
    ],
    optimization: {
        minimize: true
    }
});
