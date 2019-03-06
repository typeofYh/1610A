import Vue from 'vue';
import App from './app';
import router from './router';
import MyFooter from '@/components/footer';

import './css/common.css';
Vue.component('MyFooter',MyFooter);
new Vue({
    el:'#app',
    router,
    render:h=>h(App)
})