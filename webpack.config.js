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

const NODE_ENV = process.env.NODE_ENV;

module.exports = {
    // точка входа, основной файл, в котором мы всё подключаем, т.е. какой модуль собираем.
    entry: './src/index.js',

    // куда выкладывать
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'lib',
    },

    // пересборка проекта при обнаружении изменений, используется кэш, пресобирается только изменившееся
    watch: true,
    watchOptions: {
        // сколько WP будет ждать до пересборки после того, как изменения произошли (ms).
      aggregateTimeout: 100
    },

    resolve: {
        // какие расширения понимать по умолчанию. Не забыть сюда добавлять все расширения, использующиеся в проекте.
        extensions: ['.scss', '.js', '.vue'],
        // это нужно, чтобы сборка vue компилировала шаблоны. Подробнее - https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
        alias: { vue: 'vue/dist/vue.esm.js' },
    },

    // локальный сервер для разработки
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 4200
    },

    // для отладки, чтобы можно было код смотреть в виде файлов, а не абракадаброй.
    // Могут быть разные параметры, для production лучше source-map, для development – eval либо cheap-inline-source-map.
    // Есть подозрение, что в WP4 включена по умолчанию на eval.
    devtool: 'source-map',

    // оптимизация выходных файлов
    optimization: {
        minimize: true,
        minimizer: [
            new OptimizeCSSAssetsPlugin({
                // + опции
            }),

            // new TerserPlugin({
            //     // + опции
            // })
        ]
    },
    // сюда подключаются плагины
    plugins: [
        new HTMLPlugin({
            filename: 'index.html',
            template: './src/index.html',
        }),

        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),

        new VueLoaderPlugin(),

        new webpack.EnvironmentPlugin(['NODE_ENV', 'USER'])
    ],

    // лоадеры
    module: {
        rules: [
            // лоадер css
            {
                test: /\.css$/,

                // если использовать запись стилей в head <style>
                //use: ['style-loader', 'css-loader']

                // если делать отдельный стилевой файл
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            // лоадер scss
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            // лоадер less
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
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