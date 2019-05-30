const path = require('path');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const baseWebpackConfig = require('./webpack.conf');

const {resolve} = path;
const appPath = resolve(__dirname, '../../app');
const OUTPUT_PATH = path.resolve('../', 'dist');

module.exports = merge(baseWebpackConfig, {
    mode: 'production',
    entry: {
        main: resolve(appPath, 'index.js')
    },
    output: {
        path: OUTPUT_PATH,
        filename: '{{{suiteName}}}.js'
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
});
