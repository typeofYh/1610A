<template>
    <div class="wrap">
        <div class="top">
            <h2>已选择</h2>
            <div v-for="(item,i) in listdata"
            :key="i">
                <div v-if="item.res.length">
                    {{item.res.map(item=>item.name).join()}}<span>X</span>
                </div>
            </div>
        </div>
        <div class="bottom">
            <list v-for="(item,i) in listdata"
            :key="i"
            :title="item.title"
            :index="i"
            :options="item.options"
            :res="item.res"
            @addoptions="addoptions"></list>
        </div>
    </div>
</template>
<script>
import list from './components/list';
import {data as listdata} from './mock/index';
export default {
    data(){
        return{
            listdata
        }
    },
    components:{
        list
    },
    methods:{
        addoptions({name,index,i}){
            let {
                res,type
            } = this.listdata[index];
            let flag = res.findIndex(item=>item.i===i);
            if(flag!=-1){
                res.splice(flag,1)
            }else{
                if(type==='radio'){
                    //只修改数组第一个
                    this.$set(res,'0',{name,i})
                    // res[0] = {name};
                    
                }else{
                    res.push({name,i});
                }
            }
            console.log(this.listdata);
            //console.log(this.listdata[index].res)
            // console.log(this.list[)
        }
    }
}
</script>

