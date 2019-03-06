<template>
    <footer>
        <router-link to="/">首页</router-link>
        <router-link to="/type">分类</router-link>
        <router-link to="/shopcar">购物车<span v-if="sumcount">{{sumcount}}</span></router-link>
        <router-link to="/my">我的</router-link>
    </footer>
</template>
<script>
export default {
    props:{
        sumcount:Number
    }
}
</script>

<style scoped>
footer{
    width:100%;
    height:40px;
    background:skyblue;
    display:flex;
    justify-content: space-around;
    align-items: center;
}
footer a.router-link-exact-active{
    color:yellow
}
</style>
