'use strict';
import Vue from 'vue';
import './scss/index';

// // импорт компонента Vue
import switchComponent from '@vue/components/switch-component';
import pageComponent from '@vue/components/page-component';

const app = new Vue({
    el: '#app',
    components: {
        switchComponent,
        pageComponent
    }
});
