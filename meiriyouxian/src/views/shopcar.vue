<template>
    <div>
        <div v-if="shopdata.length===0">购物车竟然是空的快选购吧！！</div>
        <template v-else>
        <ul>
            <li v-for="(item,i) in shopdata"
            :key="item.id">
                <span class="checkbox" :class="{active:onecheck[i].open}" @click="onecheckevent(i)"></span>
                <img :src="require('../images/'+item.img)" alt="">
                <h2>{{item.name}}</h2>
                <b>￥{{item.price}}</b>
                <div>
                    <button>-</button>
                    <p>{{item.count}}</p>
                    <button>+</button>
                </div>
            </li>
        </ul>
        <div>
            <span :class="{active:allcheck}"
            @click="allcheckevent"></span>全选
            <p>总价：{{sumpricen}}</p>
        </div>
        </template>
    </div>
</template>
<script>
export default {
    data(){
        return{
            allcheck:false,
            onecheck:[],
            sumpricen:0
        }
    },
    props:{
        shopdata:Array
    },
    created(){
        this.onecheck = this.shopdata.map(item=>({open:false}));
    },
    methods:{
        onecheckevent(i){
            this.onecheck[i].open = !this.onecheck[i].open;
            this.allcheck = this.onecheck.every(item=>item.open);
            this.sumprice();
        },
        allcheckevent(){
            this.allcheck = !this.allcheck;
            this.onecheck.forEach(item=>{
                item.open = this.allcheck;
            })
            this.sumprice();
        },
        sumprice(){
            let sumprice = 0;
            this.shopdata.map((item,i)=>{
               if(this.onecheck[i].open){
                   sumprice += item.count * item.price
               }
            });
            this.sumpricen = sumprice;
        }
    }
}
</script>
<style scoped>
ul li{
    display: flex;
}
span{
    width: 30px;
    height: 30px;
    display: inline-block;
    line-height: 30px;
    text-align: center;
    background: #ccc;
    border-radius: 50%;
}
span.active{
    background: pink;
}
</style>

