<template>
    <dl>
        <dt>
            <!-- <img src="../images/shop1.png" alt=""> -->
            <!-- require解析模块 当图片要动态加载时使用require方法来解析图片模块 否则会当成普通文件解析 -->
            <img :src="require('../images/'+item.img)" alt="">
        </dt>
        <dd>
            <h2>{{item.name}}</h2>
            <p>{{item.info}}</p>
            <p><b>￥{{item.price}}</b><s>￥{{item.oldprice}}</s></p>
            <span><button @click="jia">+</button></span>
        </dd>
    </dl>
</template>
<script>
export default {
    props:{
        item:Object
    },
    methods:{
        jia(){
            this.$bus.$emit('adds',this.item)
        }
    }
}
</script>
