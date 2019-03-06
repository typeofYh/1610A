import Vue from 'vue';
import app from './app';
Vue.prototype.$bus = new Vue();
new Vue({
    el:'#app',
    render:h=>h(app)
})

