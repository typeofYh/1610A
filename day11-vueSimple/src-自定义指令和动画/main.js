import Vue from 'vue';
import App from './app.vue';
Vue.directive('bg',{
    inserted(el,obj){
        el.style.background = obj.value;
    }
})
new Vue({
    el:'#app',
    render:h=>h(App)
})