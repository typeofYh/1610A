<template>
    <li>
        {{cont}}
        <input type="text" @change="$emit('inputchange',index,$event.target.value)" :value="num">
    </li>
</template>
<script>
export default {
    // props:['cont']
    props:{
        cont:{
            // type:Number,
            // default:"1610A"
            // default(){
            //     return {name:'zs'}
            // }
            validator(val){
                return /^[\u4e00-\u9fa5]+$/.test(val);
            }
        },
        index:{
            type:Number,
            required:true
        },
        num:String
    },
    methods:{
        submit(){
           alert(this.cont+'-'+this.num)
        }
    }
}
</script>

