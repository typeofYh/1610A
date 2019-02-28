<template>
    <tr>
        <td>{{type}}</td>
        <td>{{num}}</td>
        <td><input type="text" :value="tip" @input="change"></td>
        <td><button @click="$emit('del',index)">删除</button></td>
    </tr>
</template>
<script>
export default {
    data(){
        return {
            text:""
        }
    },
    props:['type','tip','num','index'],
    methods:{
        change(e){
            this.$emit('textchange',e.target.value,this.index);
        }
    }
}
</script>
