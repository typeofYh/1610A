<template>
    <footer>
        <div><input type="text" v-model="text"></div>
        <button @click="submit">发送</button>
    </footer>
</template>
<script>
export default {
    data(){
        return {
            text:""
        }
    },
    methods:{
        submit(){
            if(this.text!=''){
                this.$emit('send',{
                    title:this.text,
                    name:"易航",
                    img:'https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=1681391545,4187928589&fm=85&s=0D803C72F2A477157583DA4D0300C0EE'
                })
            }
            this.text = '';
        }
    }
}
</script>

