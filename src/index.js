'use strict';
import Vue from 'vue';
import './scss/index';

// // импорт компонента Vue
import switchComponent from '@vue/components/switch-component';
import indexComponent from '@vue/components/index-component';

const app = new Vue({
    el: '#app',
    components: {
        switchComponent,
        indexComponent,
    }
});
