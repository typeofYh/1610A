<template>
    <div id="wrap">
        <header class="header">1610A</header>
        <main class="main">
            <div>
                <myList 
                v-for="(item,i) in list"
                :key="i"
                :img="item.img"
                :title="item.title"
                :name="item.name"/>
            </div>
        </main>
        <myFooter @send="send"></myFooter>
    </div>
</template>
<script>
import axios from 'axios';
import BettrScroll from 'better-scroll';
import myList from '@/components/mylist';
import myFooter from '@/components/myfoot'
export default {
    data(){
        return {
            list:[],
            bscroll:null
        }
    },
    components:{
        myList,
        myFooter
    },
    mounted(){
        this.getdata();
        this.bscroll = new BettrScroll('.main',{
            probeType:2
        });
        this.scrollLoad();
    },
    methods:{
        send(obj){
            this.list.unshift(obj);
        },
        getdata(){
            axios.get('/api/list').then(res=>{
                this.list = this.list.concat(res.data.list);
            })
            //当数据发生变化dom更新完成之后执行
            this.$nextTick(()=>{
                this.bscroll.refresh();
            })
        },
        scrollLoad(){
            let bs = this.bscroll;
            let open = false;
            bs.on('scroll',()=>{
                if(bs.y < bs.maxScrollY - 40){
                    open = true;
                }else if(bs.y < bs.maxScrollY - 20){
                    open = false;
                }
            })
            bs.on('scrollEnd',()=>{
                open = false;
            })
            bs.on('touchEnd',()=>{
                if(open){
                    this.getdata();
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    #wrap{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    main{
        flex:1;
        overflow: hidden;
    }
    .header,footer{
        width: 100%;
        height: 45px;
        line-height: 45px;
        background: skyblue;
        color:#fff;
        font-size: 16px;
        text-align: center;
    }
    footer{
        display: flex;
        div{
            flex:3
        }
        button{
            flex:1
        }
    }
</style>


