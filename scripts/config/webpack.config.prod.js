
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const webpackConfig = require('./webpack.config.base')
const helpers = require('./helpers')
const env = require('../environment/prod.env')

let prod = require( '../../prod.config' );
let config = require( './config' );

webpackConfig.module.rules = [
    ...webpackConfig.module.rules,
]

// ensure ts lint fails the build
webpackConfig.module.rules[0].options = {
  failOnHint: true
}

webpackConfig.plugins = [
    ...webpackConfig.plugins,

    new webpack.DefinePlugin({
        'process.env': env
    }),

    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: function (module) {
            return module.context && module.context.indexOf('node_modules') !== -1
        }
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest',
        minChunks: Infinity
    }),

    new HtmlWebpackPlugin({
        inject: true,
        filename: helpers.root('/public/index.html'),
        chunks: ['manifest', 'vendor', 'index'],
        template: helpers.root('/static/index.html'),
        favicon: helpers.root('/static/favicon.ico'),
        minify: {
            removeComments: false,
            collapseWhitespace: false,
            removeRedundantAttributes: false,
            useShortDoctype: false,
            removeEmptyAttributes: false,
            removeStyleLinkTypeAttributes: false,
            keepClosingSlash: false,
            minifyJS: false,
            minifyCSS: false,
            minifyURLs: false
        }
    }),

    new HtmlWebpackPlugin({
        inject: true,
        filename: helpers.root('/public/login.html'),
        chunks: ['manifest', 'vendor', 'login'],
        template: helpers.root('/static/index.html'),
        favicon: helpers.root('/static/favicon.ico'),
        minify: {
            removeComments: false,
            collapseWhitespace: false,
            removeRedundantAttributes: false,
            useShortDoctype: false,
            removeEmptyAttributes: false,
            removeStyleLinkTypeAttributes: false,
            keepClosingSlash: false,
            minifyJS: false,
            minifyCSS: false,
            minifyURLs: false
        }
    }),

    new FaviconsWebpackPlugin(helpers.root('/static/icon.png'))
]

if (prod.isCompress) {
    webpackConfig.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        })
    );
}

module.exports = webpackConfig
