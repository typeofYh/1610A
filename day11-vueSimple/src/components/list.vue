<template>
    <dl>
        <dt><img :src="img" alt=""></dt>
        <dd>
            <h2>{{title}}</h2>
            <p>{{tip}}</p>
            <b>￥{{price}}</b>
            <count 
            :id="id"
            :title="title"
            :price="price"
            :num="count"/>
        </dd>
    </dl>
</template>
<script>
import count from './count';
export default {
    props:['title','tip','price','img','id','count'],
    components:{
        count
    }
}
</script>
<style lang="scss" scoped>
    dl{
        width: 100%;
        display: flex;
        border: 1px solid #eee;
        dt{
            width: 100px;
            height: 100px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        dd{
            flex:1;
            overflow: hidden;
        }
    }
</style>


