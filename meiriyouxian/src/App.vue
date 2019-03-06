<template>
  <div id="app">
    <main>
      <router-view :shopdata="shopdata"/>
    </main>
    <MyFooter :sumcount="sumcount"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      shopdata:[],
      sumcount:0
    }
  },
  created(){
    this.$bus.$on('adds',(data)=>{
       let shopInfo = this.shopdata.find(item=>item.id===data.id);
       if(shopInfo){
         shopInfo.count++;
       }else{
         this.shopdata.push({count:1,...data})
       }
       this.sumcount = this.shopdata.reduce((p,n)=>p+n.count,0);
    })
  }
}
</script>

<style>

body,html,#app{width:100%;height:100%;padding:0;margin:0;}
#app{
  display:flex;
  flex-direction: column;
}
#app main{
  flex:1;
  overflow: auto;
}



</style>
