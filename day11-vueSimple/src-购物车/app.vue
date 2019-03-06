<template>
    <div id="app">
        <div class="main">
            <MyList v-for="(item,i) in shopcar"
            :key="i"
            :title="item.title"
            :tip="item.tip"
            :price="item.price"
            :img="item.img"
            :id="item.id"
            :count="item.count"></MyList>
        </div>
        <footer>
            <transition>
                <MyDialog v-if="dialogopen"
                :localdata="localdata"></MyDialog>
            </transition>
            <div class="caricon" @click="dialogopen=!dialogopen"><span class="count" v-if="sumcount">{{sumcount}}</span></div>
            <b>总价：<span style="color:red">{{sumprice}}</span></b>
        </footer>
    </div>
    
</template>
<script>
import MyList from './components/list';
import shopcar from './mock/data';
import MyDialog from './components/dialog';
export default {
    components:{
        MyList,
        MyDialog
    },
    data(){
        return{
            shopcar,
            sumcount:0,
            sumprice:0,
            dialogopen:false,
            localdata:null
        }
    },
    created(){
        this.localdata = JSON.parse(localStorage.getItem('shopcar')) || [];
        this.changecount();
        // console.log(this.shopcar);
        //点击加减修改本地存储
        this.$bus.$on('addCar',data=>{
            let index = this.localdata.findIndex(item=>item.id===data.id);
            if(index === -1){
                this.localdata.push(data);
            }else{
                if(data.count===0){
                    this.localdata.splice(index,1)
                }else{
                    this.localdata.splice(index,1,data)
                }
            }
            localStorage.setItem('shopcar',JSON.stringify(this.localdata));
            this.changecount();
        })
    },
    methods:{
        changecount(){
            //一进入页面获取本地存储的数据 设置默认数量
            this.sumcount = 0;
            this.sumprice = 0;
            this.shopcar.forEach(item=>{
                let obj = this.localdata.find(v=>v.id===item.id);
                this.$set(item,'count',obj ? obj.count : 0);
                this.sumcount += item.count;
                this.sumprice += item.count * item.price;
            })
        }
    }
}
</script>
<style>
*{
    padding:0;
    margin: 0;
    list-style: none;
    box-sizing: border-box;
}
.v-enter,.v-leave-to{
    transform: translateY(50%);
    opacity: 0;
    visibility: hidden;
}
.v-enter-active,.v-leave-active{
    transition: all 0.5s
}
.v-enter-to,.v-leave{
    transform: translateY(0);
    visibility: visible;
    opacity: 1;
}
body,html,#app{
    width: 100%;
    height: 100%;
}
#app{
    display: flex;
    flex-direction: column;
}
.main{
    flex:1;
    overflow:auto;
}
footer{
    width: 100%;
    height: 50px;
    background: #000;
    padding-left:80px;
    color:#fff;
    line-height: 50px;
}
.caricon{
    width: 50px;
    height: 50px;
    position: absolute;
    left:10px;
    bottom: 10px;
    background: skyblue;
    border-radius: 50%;
}
.count{
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: red;
    color:#fff;
    text-align: center;
    line-height: 25px;
    font-size: 12px;
    position: absolute;
    right: -15px;
    top:-10px;
}
</style>

