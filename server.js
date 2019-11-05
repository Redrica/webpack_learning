// файл серверного скрипта в рамках использования webpack-dev-middleware для отслеживания сборки

const webpack = require('webpack');
const express = require('express');
const webpackDevMidleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config');
const compiler = webpack(config);

// Говорим экспресс-серверу использовать webpack-dev-middleware и наш конфиг-файл как основной
app.use(webpackDevMidleware(compiler, {
    publicPath: config.output.publicPath,
}));

// Отслеживаем изменения на 3000 порте
app.listen(3000, function () {
    console.log('Example app listening on port 3000!\n');
});

// это всё добро запускается через node.js, моно прописать отдельный скрипт в package.json