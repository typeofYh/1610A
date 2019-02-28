<template>
    <div class="icon">
        <span :class="classname"></span>
        <b>{{tip}}</b>
    </div>
</template>
<script>
export default {
    props:{
        tip:String,
        classname:String
    }
}
</script>

<style scoped>
div.icon,span{
    display: inline-block;
    width: 50px;
    height: 50px;
    line-height: 50px;
}
div.icon{
    position: relative;
}
span{
    border-radius: 50%;
}
span.address{
    background: red;
}
span.qq{
    background: skyblue;
}
span.ewm{
    background: pink;
}
b{
    display: none;
    position: absolute;
    right:60px;
    min-width: 100px;
    height: 30px;
    line-height: 30px;
    top:50%;
    transform: translateY(-50%);
    background: rgba(0,0,0,.8);
    color:#fff;
}
div.icon:hover b{
    display: block;
}
</style>

