<template>
    <div id="app">
        <div class="top">
            <h2>已选择：</h2>
            <div 
            v-for="(item,i) in list"
            :key="i"
            v-if="item.res.length">{{item.res.map(item=>item.text).join()}}<span @click="removeall(i)">X</span></div>
        </div>
        <div class="bottom">
            <Selected 
            v-for="(item,i) in list"
            @addclass="changeRes"
            :key="i"
            :index="i"
            :list="item"/>
        </div>
    </div>
</template>
<script>
import Selected from './components/selected';
import list from './mock/index';
export default {
    data(){
        return {
            list
        }
    },
    created(){
        window.vm = this;
    },
    components:{
        Selected
    },
    methods:{
        changeRes(obj){
            let {index,type,position,text} = obj;
            let res = this.list[position].res;
            let flag = res.findIndex(item=>item.index ===index);
            if(flag===-1){
                if(type === 'radio'){
                    this.$set(res,'0',{index,text})
                }else{
                    res.push(obj);
                }
            }else{
                res.splice(flag,1)
            }
        },
        removeall(ind){
            this.list[ind].res = [];
        }
    }
}
</script>

