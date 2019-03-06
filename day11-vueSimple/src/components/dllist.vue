<template>
    <dl :class="classname" @click="$router.push(`/detail/${bookid}?title=${title}`)">
        <dt>
            <img v-lazy="img" alt="">
        </dt>
        <dd>
            <h2>{{title}}</h2>
            <slot v-if="classname==='leftblock'"></slot>
        </dd>
    </dl>
</template>
<script>
export default {
    props:['title','img','classname','bookid']
}
</script>
<style lang="scss" scoped>
dl.upblock{
    width: 33%;
    display: inline-block;
}
h2{
    font-weight: 0;
    font-size: 14px;
}
dl.leftblock{
    display: flex;
    dt{
        width: 140px;
    }
    dd{
        flex:1;
        overflow: hidden;
    }
}
</style>


