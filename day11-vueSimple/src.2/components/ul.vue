<template>
    <div id="parent">
        <ul>
            <myLi v-for="(item,i) in list"
            :key="i"
            :cont="item.title"
            :index="i"
            :num="item.num"
            v-on:inputchange="func"></myLi>
        </ul>
        <button @click="show">提交</button>
    </div>
</template>
<script>
import myLi from './li';
export default {
    data(){
        return {
            list:[{
                title:'李仁鹏',
                num:''
            },{
                title:"樊艳蓉",
                num:''
            },{
                title:'魏澳回',
                num:''
            }]
        }
    },
    components:{
        myLi
    },
    methods:{
        func(i,v){
            this.list[i].num = v;
        },
        show(){
            console.log(this.list);
        }
    }
}
</script>

