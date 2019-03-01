<template>
    <div>
        <div v-show="open" class="reducebox">
            <button @click="reducecount">-</button>
            <span>{{count}}</span>
        </div>
        <button @click="addcount">+</button>
    </div>
</template>
<script>
export default {
    props:['price','id','title','num'],
    data(){
        return {
            open:false,
            count:0
        }
    },
    created(){
        this.count = this.num;
        this.open = this.count > 0;
    },
    methods:{
         addcount(){
            this.count++;
            this.open = true;
            this.sendAddCar();
        },
        reducecount(){
            this.count--;
            this.open = this.count > 0;
            this.sendAddCar();
        },
        sendAddCar(){
            //像app.vue通信
            this.$bus.$emit('addCar',{
                id:this.id,
                title:this.title,
                price:this.price,
                count:this.count
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.reducebox{
    display: inline-block;
}
</style>

