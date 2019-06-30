
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers = require('./helpers')
const webpackConfig = require('./webpack.config.base')
const env = require('../environment/dev.env')

let prod = require( '../../prod.config' );
let config = require( './config' );

prod.host = prod.host || 'localhost';

let url = [ 'http://', prod.host ];
prod.port && url.push( ':', prod.port );
url.push( '/' );

webpackConfig.module.rules = [
    ...webpackConfig.module.rules,
]

webpackConfig.output =  {
    filename: 'static/js/[name]_[hash].js'
    //, publicPath:  url.join('')
    , publicPath:  '/'
},

( prod.host && prod.port ) && ( webpackConfig.output.publicPath = url.join('') );

webpackConfig.plugins = [...webpackConfig.plugins,

    new webpack.DefinePlugin({
        'process.env': env
    }),

    new HtmlWebpackPlugin({
        inject: true,
        filename: "index.html",
        chunks: ['manifest', 'vendor', 'index'],
        template: `${helpers.root('/src/index.ejs')}`,
        showErrors: true,
        favicon: helpers.root('/src/favicon.ico')
    }),

    new HtmlWebpackPlugin({
        inject: true,
        filename: "login.html",
        chunks: ['manifest', 'vendor', 'login'],
        template: `${helpers.root('/src/index.ejs')}`,
        favicon: helpers.root('/src/favicon.ico')
    }),

    new ExtractTextPlugin({
        disable: process.env.NODE_ENV == 'development',
        filename:
            "src/css/[name]_[hash].css",
        allChunks: true
    })
]

webpackConfig.optimization = {
        moduleIds: 'hashed',
        namedChunks: true,
        namedModules: true,
        runtimeChunk: {
            name: 'manifest'
        },
        splitChunks: {
            chunks: 'initial',
            name: false,
            cacheGroups: {
                commons: {
                    name: 'commons',
                    chunks: 'all',
                    minChunks: 2,
                    priority: 10
                },
                vendor: {
                    name: 'vendor',
                    test: chunks => {
                        return (
                            chunks.context &&
                            chunks.context.indexOf('node_modules') !== -1
                        );
                    },
                    minChunks: 1,
                    chunks: 'all',
                    priority: 5,
                    reuseExistingChunk: true
                },
                default: false
            }
        }
    };


let devConfig = {
    open: false,
    hot: true,
    historyApiFallback: true,
    contentBase: config.dev.assetsProdRoot,
    publicPath: '/',
    headers: {
        "Access-Control-Allow-Origin": "*"
    },
    watchOptions: {
        poll: config.dev.poll
        , ignored: [/node_modules/, /__test__/, /\.bak$/ ]
    },
    before: function(app) {
        //console.log( app );
        /*
        app.get('*.css', function(req, res) {
            res.sendStatus(200);
        });
        */
    }
};

prod.port && ( devConfig.port = prod.port );
prod.port && prod.host && ( devConfig.host = prod.host );

webpackConfig.devServer = devConfig;

module.exports = webpackConfig
