<template>
    <div>
        <ul>
            <li v-for="(item,i) in 3"
            :key="i"
            :class="{active:i===index}"
            @click="index = i">{{item}}</li>
        </ul>
        <div>
            1
        </div>
    </div>
</template>
<script>
export default {
    created(){
        console.log('bankuai');
    },
    data(){
        return{
            index:0
        }
    },
    destroyed(){
        console.log('destroyed')
    }
}
</script>
<style scoped>
    li.active{
        color:red
    }
</style>


