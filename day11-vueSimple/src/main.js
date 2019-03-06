import Vue from 'vue';
import App from './app';
import router from './router';
import plugins from './plugins'; //自己定义的vue插件
import VueLazy from 'vue-lazyload';
import './css/common.css';
import 'swiper/dist/css/swiper.min.css';

Vue.use(VueLazy,{
    preLoad: 1.3,
    loading: '/src/img/login.gif',
    attempt: 1
})
Vue.use(plugins);

new Vue({
    el:'#app',
    render(h){
        return h(App)
    },
    router: router
})
