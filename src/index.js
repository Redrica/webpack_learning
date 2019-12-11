'use strict';
import Vue from 'vue';
import './scss/index';

// импорт компонентов Vue

import commonComponent from '@vue/components/common-component';
import indexComponent from '@vue/components/index-component';

const app = new Vue({
    el: '#app',
    components: {
        commonComponent: () => import('./vue/components/common-component'),
        indexComponent,
    }
});
