import App from './App';
import Vue from 'vue';

new Vue({
    el:'#app',
    // template:'<App/>',
    // components:{
    //     App:App
    // }
    render(func){
        return func(App);
    }
})