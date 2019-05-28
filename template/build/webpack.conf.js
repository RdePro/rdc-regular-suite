const path = require('path');
const os = require('os');
const chalk = require('chalk');
const HappyPack = require('happypack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const ProgressBarPlugin = require('progress-bar-webpack-plugin');


const happyThreadPool = HappyPack.ThreadPool({
    size: os.cpus().length
});

const {resolve} = path;
const appPath = resolve(__dirname, '../../app');
const templatePath = resolve(__dirname, '../');

module.exports = {
    mode: 'none',
    entry: resolve(appPath, '__tests__/main.js'),
    resolve: {
        extensions: ['.js', '.less', '.json'],
        alias: {
            '@': resolve(templatePath, 'src')
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HappyPack({
            id: 'babel',
            loaders: ['babel-loader?cacheDirectory=true'],
            threadPool: happyThreadPool
        }),
        new HappyPack({
            id: 'html',
            loaders: ['html-loader'],
            threadPool: happyThreadPool
        }),
        new HappyPack({
            id: 'css',
            loaders: ['style-loader', 'css-loader'],
            threadPool: happyThreadPool
        }),
        new HappyPack({
            id: 'less',
            loaders: ['style-loader', 'css-loader', 'less-loader'],
            threadPool: happyThreadPool
        }),
        new ProgressBarPlugin({
            format: `${chalk.blue.bold('build  ') + chalk.cyan('[:bar]') + chalk.green.bold(':percent')} (${chalk.magenta(':elapsed')} seconds) `,
            clear: false
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: [resolve(appPath), resolve(templatePath)],
                use: ['happypack/loader?id=babel']
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                include: [resolve(appPath), resolve(templatePath)],
                use: ['happypack/loader?id=html']
            },
            {
                test: /\.css$/,
                use: ['happypack/loader?id=css']
            },
            {
                test: /\.less$/,
                use: ['happypack/loader?id=less']
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: 'url-loader'
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: 'url-loader'
            }
        ]
    }
};
