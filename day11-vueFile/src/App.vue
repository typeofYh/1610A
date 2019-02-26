<template>
    <div>
        <h2>{{title}}</h2>
        <Son></Son>
        <Son />
    </div>
</template>
<script>
import Son from './components/son';
export default {
    data(){
        return {
            title:'1610A'
        }
    },
    components:{
        Son
    }
}
</script>


