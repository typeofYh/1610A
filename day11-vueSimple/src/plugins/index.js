import axios from 'axios';
export default {
    install(Vue,options){
        Vue.component('MyHeader',()=>import('@/components/myheader.vue'));
        Vue.component('DlList',()=>import('@/components/dllist.vue'));
        Vue.prototype.$bus = new Vue();
        Vue.prototype.$ajax = axios;
    }
}