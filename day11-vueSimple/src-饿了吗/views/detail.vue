<template>
    <div>
        店铺详请
        <div>
            <ul>
                <li @click="$router.push(`/shop/${$route.params.shopid}/rx`)">热销</li>
                <li @click="$router.push(`/shop/${$route.params.shopid}/zp`)">招牌</li>
            </ul>
            <div>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
///shop/1
export default {
    watch:{
        '$route'(val){
            console.log(val);
        }
    },
    created(){
        console.log(this.$route.params);
    },
    beforeRouteEnter(to,from,next){
        //组件末被创建之前
        let {shopid} = to.params;
        if(shopid >= 1 && shopid <= 5){
            next();
        }else{
            next('/');
        }
    },
    beforeRouteUpdate(to,from,next){
        //当路由对象发生变化时触发
        console.log('beforeRouteUpdate');
        console.log(to);
        console.log(from);
        next();
    }
}
</script>

