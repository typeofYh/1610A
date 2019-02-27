<template>
    <dl>
        <dt><img :src="img" alt=""></dt>
        <dd>
            <h2>{{title}}</h2>
            <span>{{name}}</span>
        </dd>
    </dl>
</template>
<script>
export default {
    props:{
        img:String,
        title:String,
        name:String
    }
}
</script>
<style lang="scss" scoped>
dl{
    width: 100%;
    padding: 10px;
    border-bottom: 1px solid #eee;
    display: flex;
    dt,img{
        width: 100px;
        height: 100px;
    }
    dd{
        flex:1;
        padding-left:5px;
    }
}
</style>


