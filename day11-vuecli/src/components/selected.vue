<template>
    <div>
        <h2>{{list.title}}</h2>
        <span :class="{active:list.res.length===0}">不限</span>
        <span v-for="(item,i) in list.cont"
        :key="i"
        :class="{active:list.res.find(item=>item.index===i)}"
        @click="addclass(i)">{{item.title}}</span>
    </div>
</template>
<script>
export default {
    props:{
        list:Object,
        index:Number
    },
    methods:{
        addclass(i){
            // this.list.cont[i].classname = !this.list.cont[i].classname
            this.$emit('addclass',{
                index:i,
                position:this.index,
                text:this.list.cont[i].title,
                type:this.list.type
            })
        }   
    }
}
</script>
<style lang="scss" scoped>
    span{
        display: inline-block;
        padding: 3px 15px;
        margin: 2px;
        &.active{
            background: skyblue;
            color:#fff;
        }
    }
</style>


