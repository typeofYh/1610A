<template>
    <header>
        <span @click="$router.back()" v-if="back"><</span>
        <slot></slot>
    </header>
</template>
<script>
export default {
    props:{
        back:{
            type:Boolean,
            default:true
        }
    }
}
</script>

<style scoped>
header{
    width: 100%;
    height: 45px;
    line-height: 45px;
    color:#333;
    background: #eee;
    display: flex;
}
header ul{
    display: flex;
    width: 80%;
}
header ul li{
    flex:1;
    text-align: center;
}
header ul li.router-link-exact-active{
    color:orange;
}
.user{
    display: inline-block;
    width: 30px;
    height: 30px;
    background: red;
}
</style>
