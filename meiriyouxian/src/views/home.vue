<template>
    <div>
       <swiper :options="{autoplay:true}">  
            <swiper-slide>
               1
            </swiper-slide>
            <swiper-slide>
               2
           </swiper-slide>
       </swiper>
       <div>
           <h2>本周特价</h2>
           <dllist 
           v-for="item in list"
           :key="item.id"
           :item="item"/>
       </div>
    </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import dllist from '@/components/dllist';
import list from '../mock/data'
export default {
  components: {
    swiper,
    swiperSlide,
    dllist
  },
  data(){
      return{
          list
      }
  }
}
</script>

<style  scoped>
.swiper-slide{
    height: 200px;
    background: pink;
}
</style>
