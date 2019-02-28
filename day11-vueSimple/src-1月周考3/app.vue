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
        <div class="listbox">
            <h2>列表</h2>
            <table>
                <thead>
                    <tr>
                        <th>类型</th>
                        <th>号码/账号</th>
                        <th>提示内容</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <mylist v-for="(item,i) in checklist"
                    :key="i"
                    :type="item.title"
                    :num="item.number"
                    :tip="item.tip"
                    :index="i"
                    @textchange="textchange"
                    @del="del"
                    ></mylist>
                </tbody>
            </table>
        </div>
        <div class="iconbox">
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
import mylist from './components/list';
export default {
    data(){
        return {
            list,
            open:false,
            checklist:[] //选中的数组
        }
    },
    components:{
        icon,
        mylist
    },
    methods:{
        addlist(index){
            this.open = false;//关闭下拉列表
            let flag = this.checklist.find(item=>{
                return item.title === this.list[index].title;
            })
            if(flag){
                alert('已存在')
            }else{
                this.checklist.push({...this.list[index]});
            }
        },
        textchange(val,index){
            this.checklist[index].tip = val;
        },
        del(i){
            this.checklist.splice(i,1);
        }
    }
}
</script>
<style lang="scss" scoped>
.iconbox{
    position: fixed;
    right: 10px;
    bottom: 10px;
    width: 50px;
}
</style>


