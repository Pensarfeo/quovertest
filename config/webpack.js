const path = require('path')
// const webpack = require('webpack')
// const autoprefixer = require('autoprefixer')
// const transformClassProperties = require('babel-plugin-transform-class-properties')

module.exports = {
    entry: [ 'babel-polyfill', './index.js' ],
    devServer: {
        inline: true,
        port: 3001,
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ 'env', 'react', 'stage-0' ],
                    },
                },
            }, {
                test: /\.scss$/,
                include: /src/,
                loaders: 'style!css!autoprefixer!sass',
            }, {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url',
            }, {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000',
            }, {
                test: /\.(eot|ttf|wav|mp3|pdf)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ],
            } ],
    },
}
