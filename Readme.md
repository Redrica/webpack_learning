# NPM Глоссарий
**Описание применения использованных в сборке зависимостей:**

**devDependencies:**
```javascript
@babel/cli
``` 
```javascript
@babel/core
``` 
```javascript
@babel/preset-env
``` 
```javascript
babel-loader
``` 
```javascript
webpack
``` 
```javascript
webpack-cli
``` 
```javascript
webpack-dev-server

``` 
```javascript
vue-loader
``` 
```javascript
vue-template-compiler
``` 
```javascript
terser-webpack-plugin
``` 
```javascript
cross-env
``` 
```javascript
css-loader
``` 
```javascript
file-loader
``` 
Для подключения изображений в сборку
```javascript
html-webpack-plugin
``` 
```javascript
mini-css-extract-plugin
``` 
```javascript
node-sass
``` 
```javascript
optimize-css-assets-webpack-plugin
```
```javascript
sass-loader
``` 
```javascript
style-loader
``` 
```javascript
lodash
``` 
Библиотека для вспомогательных операций в JS
```javascript
clean-webpack-plugin
```
Плагин для удаления файлов, по умолчанию чистит ./dist 
```javascript
express
```
```javascript
webpack-dev-middleware
```
Express и middleware нужны, чтобы организовать отслеживание работающей сборки

 
**dependencies**
```javascript
@babel/polyfill
```
Используется для кроссбраузерной поддержки кода. Полифил определяет клиентский браузер и меняет итоговый код, заменяя то, что этот браузер может не понять, на альтернативу.

```javascript
vue
```
Для работы Vue.js.

```javascript
jquery
``` 
Подключение библиотеки jQuery (только если требуется в проекте).
