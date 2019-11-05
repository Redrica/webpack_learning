'use strict';
// import Vue from 'vue';
//
// import AppService from './modules/app.service';
// import { config } from './modules/config';
// import './modules/header.component';
// import './css/index.css';
// import './scss/index';
// import './less/index.less';
// // импорт компонента Vue
// import testComponent from './vue/test';
//
// let welcome = require('./modules/my-module');
// // ↓ не заботает, хз почему. В другой сборке работало.
// // exports.welcome = welcome;
// //
// welcome('travellers');
// export {welcome}
// //
// // console.log('Config key: ', config.key);
// //
// // const service = new AppService('Hello, world!');
// // service.log();
//
//
// const add = new Vue({
//     el: '#app',
//     components: {
//         testComponent,
//         // acync: () => import('./vue/acync')
//     }
// });

// import _ from 'lodash';
// import './style.css';
// import facePalm from './facepalm.jpg';
// import printMe from './print';

// function component () {
//     const element = document.createElement('div');
//     const btn = document.createElement('button');
//
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     // element.classList.add('hello');
//
//     btn.innerHTML = 'Click me and check the console!';
//     btn.onclick = printMe;
//
//     element.appendChild(btn);
//
//     // const myImage = new Image();
//     // myImage.src = facePalm;
//     //
//     // element.appendChild(myImage);
//     return element;
// }
//
// document.body.appendChild(component());

// для динамического импорта
// function getComponent () {
//     // такое название (в комментарии) нужно, чтобы название нашего отдельного бандла было lodash.bundle.js вместо просто [id].bundle.js
       // иначе будут 1.bundle.js и так далее.
//     return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
//         const element = document.createElement('div');
//         element.innerHTML = _.join(['Hello', 'webpack', 'from', 'lodash'], ' ');
//         return element;
//     }).catch(error => 'An error occurred while loading the component');
// }
//
// getComponent().then(component => {
//     document.body.appendChild(component);
// });

// то же, что и выше, с использованием async function:
async function getComponent () {
    const element = document.createElement('div');
    // именно через default, т.к. начиная с WP4 при импортировании Common JS модуля импорт не ресолвится в значение module.exports, вместо этого создается объект пространства имен для Common JS. НИХРЕНА непонятно.
    const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');

    element.innerHTML = _.join(['Hello', 'webpack', 'from', 'lodash', 'async'], ' ');
    return element;
}

getComponent().then(component => {
     document.body.appendChild(component);
});
