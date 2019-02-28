<template>
    <dl>
        <dt><img :src="img" alt=""></dt>
        <dd>
            <h2>{{title}}</h2>
            <p>{{tip}}</p>
            <b>￥{{price}}</b>
            <count></count>
        </dd>
    </dl>
</template>
<script>
import count from './count';
export default {
    props:['title','tip','price','img'],
    components:{
        count
    }
}
</script>

