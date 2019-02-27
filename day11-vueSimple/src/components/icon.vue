<template>
    <div>
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
div,span{
    display: inline-block;
    width: 50px;
    height: 50px;
    line-height: 50px;
}
div{
    position: relative;
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
    right:10;
    background: rgba(0,0,0,.8);
    color:#fff;
}
div:hover b{
    display: block;
}
</style>

