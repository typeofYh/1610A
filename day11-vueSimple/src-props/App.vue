<template>
  <div id="app">
      <MyList 
      v-for="(item,i) in list.data"
      :key="i"
      :title="item.title"
      :img="item.imgPath"
      :time="item.publishTime"/>
  </div>
</template>

<script>
import list from './mock/data';
import MyList from './components/mylist';
export default {
    data(){
      return{
         list
      }
    },
    created(){
      console.log(this.list);
    },
    components:{
      MyList
    }
}
</script>

<style lang="scss">

</style>
