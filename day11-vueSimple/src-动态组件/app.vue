<template>
    <div>
        <div class="title">
            <button @click="componentsname='bankuai'">板块</button>
            <button @click="componentsname='tuijian'">推荐</button>
            <button @click="componentsname='shipin'">视频</button>
        </div>
        <keep-alive :include="/^ban/" :max="3">
            <component :is="componentsname"></component>
        </keep-alive>
    </div>
</template>
<script>
import bankuai from './components/bankuai'
import shipin from './components/shipin'
import tuijian from './components/tuijian'

export default {
    data(){
        return {
            componentsname:'bankuai'
        }
    },
    components:{
        bankuai,
        shipin,
        tuijian
    }
}
</script>
