'use strict';

import AppService from './modules/app.service';
import { config } from './modules/config';
import './modules/header.component';
import './css/index.css';
import './scss/index';
import './less/index.less';

let welcome = require('./modules/my-module');

welcome('travellers');
export {welcome}

console.log('Config key: ', config.key);

const service = new AppService('Hello, world!');
service.log();

