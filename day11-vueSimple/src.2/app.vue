<template>
    <div id="app">
        {{title}}
        <my-ul></my-ul>
    </div>
</template>
<script>
import myUl from './components/ul';
export default {
    props:['title'],
    data(){
        return{
            
        }
    },
    components:{
        myUl
    }
}
</script>

