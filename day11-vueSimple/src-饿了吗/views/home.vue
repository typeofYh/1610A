<template>
    <div class="index">
        <main>
            <nav class="nav">
                <h2>首页</h2>
            </nav>
            <div class="search">
                <router-link to="/search" tag="p">
                    <b>搜索</b>
                </router-link>
            </div>
            <ul style="height:2000px;">
                <li v-for="(item,i) in shoplist"
                :key="i"
                @click="$router.push({
                    name:'shop',
                    params:{shopid:item.id}
                })"
                >
                    {{item.name}}
                </li>
            </ul>
        </main>
        <MyFooter />
    </div>
</template>
<script>
import {shoplist} from '@/mock/shoplist';
export default {
    data(){
        return{
            shoplist
        }
    },
    created(){
        console.log(this.$router);
        console.log(this.$route)
    }
}
</script>
<style lang="scss">
.nav{
    width: 100%;
    background: skyblue;
    position: relative;
    
       
}
.search{
     position: sticky;
     top:0;
    p{
        width: 100%;
        height: 45px;
        box-sizing: border-box;
        padding: 2px;
        background: skyblue;
        b{
            display: block;
            width: 100%;
            height: 100%;
            color:#ccc;
            background: #fff;
            text-align: center;
        }
    }
}
</style>


