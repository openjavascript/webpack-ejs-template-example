const helpers = require('./helpers')
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = require('./config');

const path = require( 'path' );
const os = require('os')
const HappyPack = require('happypack');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length});

const webpack = require('webpack');

const isDevMode = process.env.NODE_ENV == 'development';
let prodStyleLoader = !isDevMode ? MiniCssExtractPlugin.loader : 'style-loader';

const cssLoader = bool => {
    const defaultVal = [
        {
            loader: 'css-loader',
            options: {
                minimize: true,
                sourceMap: false
            }
        },
        {
            loader: 'less-loader',
            options: {
                sourceMap: true
            }
        }
    ];
    const postcssLoader = {
        loader: 'postcss-loader'
    };
    if (bool) {
        defaultVal.splice(1, 0, postcssLoader);
    }
    return defaultVal;
};

function createHappyPlugin(id, loaders) {
    return new HappyPack({
        id: id,
        loaders: loaders,
        threadPool: happyThreadPool,
        verbose: false,
    });
}

let webpackConfig = {
    entry: config.common.entries,
    output: {
        path: helpers.root('/dist/static/'),
        filename: 'js/[name]_[hash].js',
        chunkFilename: 'js/[name]_[hash].js',
        publicPath: './static/'
    },
    //devtool: 'source-map',
    resolve: {
        extensions: [ '.js', '.ts', '.tsx', '.vue', '.less', '.css', '.html', '.bak' ],
        alias: {
            '@src': helpers.root('/src'),
            'Utils': helpers.root( '/src/utils' ),
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
            rules: [
            {
                test: /\.tsx$/,
                use: 'awesome-typescript-loader',
                 "options": {
                    "failOnHint": true
                  }
            },
            {
                test: /\.tpl$/,
                use: 'html-loader'
            },
            {
                test: /\.ejs$/,
                use: 'ejs-loader'
            },
           {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.html$/,
                use: 'raw-loader'
            },
            {
                test: /\.js$/,
                use: 'happypack/loader?id=js',
                include: [config.common.resource]
            },

            {
                test: /\.less$/,
                loaders: [prodStyleLoader, 'happypack/loader?id=less']
            },
            {
                test: /\.css$/,
                loaders: [prodStyleLoader, 'happypack/loader?id=css']
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader',
                // 加上fonts文件夹, 生成到public
                options: {
                    name: 'fonts/[name].[ext]',
                    // 加上告诉webpack我的生成图片的路径是在fonts/就行了
                    publicPath: isDevMode
                        ? config.dev.assetsPublicPath
                        : config.build.assetsPublicPath
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
                loader: 'file-loader',
                options: {
                    limit: 8192,
                    name: `images/[name].[ext]`,
                    // 同上font
                    publicPath: isDevMode
                        ? config.dev.assetsPublicPath
                        : config.build.assetsPublicPath
                }
            }
        ]

    },
    externals: {
        echarts: 'echarts',
        THREE: 'THREE'
    },
    plugins: [
        new NamedModulesPlugin(),
        new CopyWebpackPlugin([{
            from: 'src/assets',
            to: './assets'
        } ]),
        new ExtractTextPlugin({
            disable: process.env.NODE_ENV == 'development',
            filename:
                "css/[name]_[hash].css",
            allChunks: true
        }),
        createHappyPlugin('js', ['babel-loader']),
        createHappyPlugin('less', cssLoader()),
        createHappyPlugin('css', ['css-loader']),
        new ProgressBarPlugin()
    ]
}

module.exports = webpackConfig
