<template>
    <div>
        <header>
            <button @click="open=true">新增</button>
            <ul v-show="open">
                <li v-for="(item,i) in list"
                :key="i"
                @click="addlist(i)">{{item.title}}</li>
            </ul>
        </header>
        <div>
            <icon v-for="(item,i) in checklist"
            :key="i"
            :tip="item.tip"
            :classname="item.icon"></icon>
        </div>
    </div>
</template>
<script>
import list from './mock/data'
import icon from './components/icon';
export default {
    data(){
        return {
            list,
            open:false,
            checklist:[]
        }
    },
    components:{
        icon
    },
    methods:{
        addlist(index){
            this.open = false;
            this.checklist.push(this.list[index]);
            console.log(this.checklist);
        }
    }
}
</script>

