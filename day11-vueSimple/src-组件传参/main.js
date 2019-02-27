import App from './app.vue';
import Vue from 'vue';

new Vue({
    el:'#app',
    // template:'<App title="1610A"/>',
    // components:{
    //     App
    // },
    render:h=>h(App,{
        props:{
            title:'1610A'
        }
    })
})