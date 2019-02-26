import Vue from 'vue';
import axios from 'axios';
let vm = new Vue({
    //el:"#app",
    template:`<div>
        <h2 ref="title">{{title}}{{aa()}}</h2>
        <ul>
            <li v-for="item in list">
                {{item.title}} {{new Date(item.time).toLocaleString()}}
            </li>
        </ul>
    </div>`, //模板字符串，会替换挂载元素
    data:{
        title:'1610A',
        list:[]
    },
    methods:{
        aa(){
            return 'string';
        }
    },
    beforeCreate(){ //属性和方法末到分配到实例上时加载
       console.log('beforeCreate');
       console.log(this.title); 
    },
    created(){ //属性和方法放配到实例触发
       axios.get('/api/list').then(data=>{
           this.list = data.data.list;
       })
    },
    beforeMount(){ //dom节点没有加载
        console.log('beforeMount');
        console.log(this.$refs)
        console.log(document.querySelector('h2'));
    },
    mounted(){ //dom节点加载完成
        console.log('mounted');
        console.log(this.$refs)
        console.log(document.querySelector('h2'));
    },
    beforeUpdate(){ //数据发生改变
        console.log('beforeUpdate');
        console.log(this.$refs.title.innerHTML);
    },
    updated(){ //数据发生改变，新的dom节点生成
        console.log('updated')
        console.log(this.$refs.title.innerHTML);
    }
})
//vm.$mount(要挂载的元素) el vue外部挂载元素的方法
vm.$mount('#app')

window.vm = vm;
// console.log(document.querySelector('h2'));