<template>
    <div id="dialog">
        <h2><span>清空</span></h2>
        <ul>
            <li v-for="item in localdata"
            :key="item.id">
                <span>{{item.title}}</span>
                <b>￥{{item.price}}</b>
                <Count 
                :id="item.id"
                :title="item.title"
                :price="item.price"
                :num="item.count"/>
            </li>
        </ul>
    </div>
</template>
<script>
import Count from './count';
export default {
    props:{
        localdata:Array
    },
    components:{
        Count
    }
}
</script>

<style lang="scss" scoped>
    #dialog{
        width:100%;
        height: auto;
        background: #eee;
        position: absolute;
        left: 0;
        bottom: 50px;
        color:#000;
    }
</style>

