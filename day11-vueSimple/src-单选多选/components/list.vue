<template>
    <div>
        <h2>{{title}}</h2>
        <span :class="{active:!res.length}">不限</span>
        <span v-for="(item,i) in options"
        :key="i"
        @click="addoptions(item.name,i)"
        :class="{active:res.find(val=>val.i===i)}">{{item.name}}</span>
    </div>
</template>
<script>
export default {
    props:['title','options','index','res'],
    methods:{
        addoptions(name,i){
            this.$emit('addoptions',{name,index:this.index,i});
        }
    },
    created(){
        window.vm = this;
    }
}
</script>
<style scoped>
    span{
        display: inline-block;
        padding: 3px 15px;
        margin: 2px;
    }
    span.active{
        background: skyblue;
        color:#fff;
    }
</style>


