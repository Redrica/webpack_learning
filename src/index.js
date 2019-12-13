'use strict';
import Vue from 'vue';
import './scss/index';
import _ from 'lodash';

// импорт компонентов Vue

//import commonComponent from '@vue/components/common-component';
import indexComponent from '../src/vue/components/index-component';
import AdditionalComponent from '@vue/components/index-additional-component';

console.log(_.join('String', '-'));

const app = new Vue({
    el: '#app',
    components: {
        commonComponent: () => import('./vue/components/common-component'),
        indexComponent,
        AdditionalComponent,
    }
});
