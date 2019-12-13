'use strict';
// настройки WEBPACK, config

// встроенный node.js модуль, позволяющий работать с путями
const path = require('path');
// плагин для генерации HTML
const HTMLPlugin = require('html-webpack-plugin');
// его величество Вебпак, для обращения к объекту
const webpack = require('webpack');
// для выгрузки CSS в отдельный файл
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// для минимизации полученного css
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// для минимизации JS, т.к. учтановка minimizer переопределяет дефолтный вебпаковский
// можно еще uglifyjs-webpack-plugin, но terser рекомендуется
const TerserPlugin = require('terser-webpack-plugin');
// подключение Vue-loader
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// подключение плагина для удаления файлов
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    mode: 'development',

    // точка входа, основной файл, в котором мы всё подключаем, т.е. какой модуль собираем.
    entry: {
        index: './src/index.js',
        page: './src/page.js',
/**
 index – полное название для точки входа, здесь можно указать полный адрес, по которому мы в итоге хотим видеть собранные бандлы, например
 entry: {
    '/somename/sometest/jsname': './test'
 } возьмет файл test.js, лежащий в корне проекте (или, если прописан контекст, – в месте указания этого контекста), обработает и выгрузит
 в директорию, указанную в output path и далее → в папку somename → в папку sometest → и назовет файл jsname + хвостик из output filename
**/

    },

    // куда выкладывать
    output: {
        // если один выходной файл
        filename: '[name].js',
        library: '[name]',
        path: path.resolve(__dirname, 'dist'),

        // несколько точек входа
        // filename: '[name].bundle.js', // задается шаблон, вместо name будет подставлено ИМЯ ТОЧКИ ВХОДА, соответствующей файлу, а не самого файла, на основе которого собирается бандл.
        // chunkFilename: '[name].bundle.js', // название для чанков, не являющихся точками входа. Должна быть связь между id чанка и этим именем, чтобы можно было обращаться к чанкам при динамическом вызове
        // path: path.resolve(__dirname, 'dist'),
        // ↓ нужен для серверного скрипта при использовании webpack-dev-middleware
        // а в целом это "интернет-путь" к нашей сборке, как из интернета получить наши файлы.
        // это обязательно предоставить в том случае, если мы хотим некоторые скрипты подгружать динамически.
        // publicPath: '/ ', // в этом случае должен брать из папки dist. В конце publicPath обязательно должен быть /
    },

    // пересборка проекта при обнаружении изменений, используется кэш, пресобирается только изменившееся
    watch: NODE_ENV === 'development',
    watchOptions: {
        // сколько WP будет ждать до пересборки после того, как изменения произошли (ms).
      aggregateTimeout: 100
    },

    resolve: {
        // какие расширения понимать по умолчанию. Не забыть сюда добавлять все расширения, использующиеся в проекте.
        extensions: ['.scss', '.js', '.vue'],
        // 'vue$': нужно, чтобы сборка vue компилировала шаблоны. Подробнее - https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@vue': path.resolve(__dirname, 'src/vue'),
        },
    },

    // локальный сервер для разработки
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 3000
    },

    // для отладки, чтобы можно было код смотреть в виде файлов, а не абракадаброй.
    // Могут быть разные параметры, для production лучше source-map, для development – eval либо cheap-inline-source-map.
    // Есть подозрение, что в WP4 включена по умолчанию на eval.
    devtool: NODE_ENV == 'development' ? 'eval' : false,
    //devtool: 'cheap-inline-source-map', // человекочитаемое

    // оптимизация выходных файлов
    optimization: {
        //runtimeChunk: 'single',
        // разделение на чанки
        splitChunks: {
            chunks: 'initial', // all - обработает и точки входа и async чанки, initial - выделит async js и css отдельно с префиксом чанка (1.js, 1.css и т.п.)
            name: true,
            minSize: 1,
            //automaticNameDelimiter: '_',
            cacheGroups: {
                commons: {
                    name: 'commons',
                    chunks: 'initial',
                    //test: './src/*.js',
                    //filename: 'common-filename.js',
                    minChunks: 2,
                    minSize: 1,
                    //enforce: true
                },
                // vendors: {
                //     test: /[\\/]node_modules[\\/]/,
                // }
                // styles: {
                //     name: 'styles',
                //     //filename: 'styles.css', // no effect
                //     test: /\.css$/,
                //     //chunks: 'all', // no effect
                //     enforce: true,
                //     //priority: 100, // no effect
                // }
            }
        },
        minimize: false, // надо true, сейчас отключено, чтобы можно было оценировать результат разделения кода.
        // minimizer: [
        //     new OptimizeCSSAssetsPlugin({
        //         // + опции
        //     }),
        //
        //     // new TerserPlugin({
        //     //     // + опции
        //     // })
        // ]
    },
    // сюда подключаются плагины
    plugins: [
        new CleanWebpackPlugin(),

        new HTMLPlugin({
            filename: 'index.html',
            template: './src/index.html',
            inject: false,
        }),

        new HTMLPlugin({
            filename: 'page.html',
            template: './src/page.html',
            inject: false,
        }),

        new MiniCssExtractPlugin({
            filename: '[name].css',
            //chunkFilename: '[name].css', // по сути можно не указывать, влияет только на динамические чанки (??)
        }),

        new VueLoaderPlugin(),

        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        })
    ],

    // лоадеры
    module: {
        rules: [
            // лоадер css
            {
                test: /\.css$/,

                // если использовать запись стилей в head <style>
                // use: ['style-loader', 'css-loader']

                // если делать отдельный стилевой файл
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            // лоадер изображений
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            // лоадер шрифтов
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            },
            // по аналогии – лоадеры csv, tsv, xml, json? и так далее
            // лоадер scss
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            // babel
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            // vue
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ],
    },
};

// system

// const pugHelpers = require('./webpack_conf/pugHelpers');

// env mode
const mode = process.env.NODE_ENV || 'development';

// data
// const pugData = require('./webpack_conf/bundleData');
// const ModalName = require('./markup/static/js/helpers/modal-name');

// plugins
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HtmlBeautifyPlugin = require('html-beautify-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const entry = require('webpack-glob-entry');



// module.exports = [
//     {
//         mode: mode,
//
//         entry: {
//             index: './src/index.js',
//             page: './src/page.js',
//         },
//
//         output: {
//             path: path.join(__dirname, 'build'),
//             filename: 'assets/js/[name].js',
//         },
//
//         devtool: (mode === 'development') ? 'cheap-module-eval-source-map' : 'source-map',
//
//         devServer: {
//             hot: true,
//             inline: true,
//             proxy: {
//                 '/api': 'http://localhost:3000',
//             },
//         },
//
//         optimization: {
//             minimizer: [
//                 // mode === constants.mode.production ? new UglifyJsPlugin() : false,
//                 mode === 'development' ? new TerserPlugin() : false,
//
//                 mode === 'development'
//                     ? new OptimizeCSSAssetsPlugin()
//                     : false,
//             ].filter(Boolean),
//             splitChunks: {
//                 chunks: 'initial',
//                 name: 'commons',
//                 minSize: 1,
//                 maxSize: 0,
//                 cacheGroups: {
//                     commons: {
//                         filename: 'common-file.js',
//                         chunks: 'initial',
//                         minChunks: 2,
//                         maxSize: 0,
//                         enforce: true,
//                     },
//                     // styles: {
//                     //     name: 'style',
//                     //     test: /\.css$/,
//                     //     chunks: 'all',
//                     //     enforce: true,
//                     //     priority: -20
//                     // },
//                 },
//             },
//         },
//
//         module: {
//             rules: [
//                 {
//                     test: /\.vue$/,
//                     loader: 'vue-loader',
//                     options: {
//                         loaders: {
//                             scss: 'vue-style-loader!css-loader!sass-loader',
//                             pug: 'raw-loader!pug-plain-loader',
//                         },
//                     },
//                 },
//                 {
//                     test: /\.js$/,
//                     loader: 'babel-loader',
//                     exclude: /node_modules/,
//                 },
//                 {
//                     test: /\.pug$/,
//                     oneOf: [
//                         // это применяется к `<template lang="pug">` в компонентах Vue
//                         {
//                             resourceQuery: /^\?vue/,
//                             use: [
//                                 'pug-plain-loader',
//                             ],
//                         },
//                         // это применяется к импортам pug внутри JavaScript
//                         // для компиляции pug-страничек src/markup/pages, уже не надо
//                         // {
//                         //     use: [
//                         //         'raw-loader',
//                         //         {
//                         //             loader: 'pug-html-loader',
//                         //             options: {
//                         //                 data: { pugHelpers, ...pugData, ModalName, DEV_MODE: mode, FILE_NAME },
//                         //             },
//                         //         },
//                         //     ],
//                         // },
//                     ],
//                 },
//                 {
//                     test: /\.s?css$/,
//                     use: [
//                         'style-loader',
//                         'css-hot-loader',
//                         MiniCssExtractPlugin.loader,
//                         {
//                             loader: 'css-loader',
//                             options: {
//                                 sourceMap: true,
//                                 url: false,
//                                 // module: true,
//                             },
//                         },
//                         {
//                             loader: 'sass-loader',
//                             options: {
//                                 sourceMap: true,
//                             },
//                         },
//                     ],
//                 },
//
//             ], // end rules
//         },
//
//         plugins: [
//             mode === 'production'
//                 ? new CleanWebpackPlugin()
//                 : false,
//             new webpack.DefinePlugin({
//                 'process.env': {
//                     NODE_ENV: JSON.stringify(process.env.NODE_ENV),
//
//                 },
//             }),
//
//             new MiniCssExtractPlugin({
//                 filename: `assets/css/[name].css`,
//                 //filename: `assets/css/${FILE_NAME.CSS}`,
//                 //chunkFilename: `assets/css/[name].css`,
//             }),
//
//
//             new webpack.SourceMapDevToolPlugin({
//                 filename: '[file].map',
//             }),
//
//             new VueLoaderPlugin(),
//
//             mode === 'development'
//                 ? new webpack.HotModuleReplacementPlugin()
//                 : false,
//
//         ].filter(Boolean),
//         // для компиляции pug-страничек src/markup/pages, уже не надо
//         // .concat( htmlPlugins,
//         // [
//         //     mode === constants.mode.production
//         //         ? new HtmlBeautifyPlugin({
//         //             config: {
//         //                 html: {
//         //                     end_with_newline: false,
//         //                     indent_size: 2,
//         //                     indent_with_tabs: false,
//         //                 },
//         //             },
//         //         })
//         //         : false,
//         // ].filter(Boolean)),
//
//         resolve: {
//             extensions: [ '.js', '.vue', '.json', '.svg', '.css', '.scss' ],
//             modules: [
//                 'node_modules',
//                 path.join(__dirname, 'markup'),
//             ],
//             alias: {
//                 // Set for processing assets url in styles
//                 'vue$': 'vue/dist/vue.esm.js',
//                 '@font': path.join(__dirname, 'markup/static/font/'),
//                 '@kdapi': path.join(__dirname, 'markup/static/js/api/'),
//                 '@integrations': path.join(__dirname, 'markup/static/js/integrations/'),
//                 '@api': path.join(__dirname, 'markup/static/js/api/api'),
//                 '@mock': path.join(__dirname, 'markup/static/js/mock'),
//                 '@store': path.join(__dirname, 'markup/static/js/store'),
//                 '@helpers': path.join(__dirname, 'markup/static/js/helpers/'),
//                 '@vue': path.join(__dirname, 'markup/static/js/vue/'),
//                 '@scss': path.join(__dirname, 'markup/static/scss/'),
//                 '@img': path.join(__dirname, 'markup/static/img/'),
//                 'components': path.join(__dirname, 'markup/components'),
//                 'static': path.join(__dirname, 'markup/static'),
//             },
//         },
//     },
// ];
