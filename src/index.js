'use strict';
import Vue from 'vue';

import AppService from './modules/app.service';
import { config } from './modules/config';
import './modules/header.component';
import './css/index.css';
import './scss/index';
import './less/index.less';
// импорт компонента Vue
import testComponent from './vue/test';

// let welcome = require('./modules/my-module');
// ↓ не заботает, хз почему. В другой сборке работало.
// exports.welcome = welcome;
//
// welcome('travellers');
// export {welcome}
//
// console.log('Config key: ', config.key);
//
// const service = new AppService('Hello, world!');
// service.log();


const add = new Vue({
    el: '#app',
    components: {
        testComponent,
        // acync: () => import('./vue/acync')
    }
});

