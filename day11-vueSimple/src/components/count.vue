<template>
    <div>
        <div v-show="open">
            <button @click="reducecount">-</button>
            <span>{{count}}</span>
        </div>
        <button @click="addcount">+</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            open:false,
            count:0
        }
    },
    methods:{
         addcount(){
            this.count++;
            this.open = true;
        },
        reducecount(){
            this.count--;
            this.count = this.count <= 0 ? 0 : this.count;
            this.open = this.count > 0;
        } 
    }
   
}
</script>

