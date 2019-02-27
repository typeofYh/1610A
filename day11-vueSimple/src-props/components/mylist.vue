<template>
    <dl>
        <dt><img :src="img" alt=""></dt>
        <dd>
            <h2>{{title}}</h2>
            <span>{{publishTime}}</span>
        </dd>
    </dl>
</template>
<script>
export default {
    props:['title','img','time'],
    computed:{
        publishTime(){
            return new Date(this.time).toLocaleDateString();
        }
    }
}
</script>

