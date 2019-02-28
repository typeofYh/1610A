<template>
    <div>
        <div>
            <MyList v-for="(item,i) in shopcar"
            :key="i"
            :title="item.title"
            :tip="item.tip"
            :price="item.price"
            :img="item.img"></MyList>
        </div>
    </div>
</template>
<script>
import MyList from './components/list';
import shopcar from './mock/data';
export default {
    components:{
        MyList
    },
    data(){
        return{
            shopcar
        }
    }
}
</script>

