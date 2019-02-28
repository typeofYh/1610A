<template>
    <div>
        <button @click="open=!open">显示隐藏</button>
        <transition
        :duration="3000"
        enter-active-class="animated slideOutUp"
        leave-active-class="animated zoomOut">
            <box v-show="open"></box>
        </transition>
        <transition name="a">
            <box v-show="open"></box>
        </transition>
        <transition name="b">
            <box v-show="open"></box>
        </transition>

        <input type="text" v-focus="'hello'">

        <div v-bg="'blue'" style="width:100px;height:100px"></div>
    </div>
</template>
<script>
import box from './components/box'
import './css/animate.css';
export default {
    data(){
        return{
            open:false,
            text:121
        }
    },
    directives:{
        focus:{
            bind(){
                console.log('bind');
            },
            //调用该指令的dom节点加载成功
            inserted(el,obj){
                console.log('inserted');
                console.log(el);
                console.log(obj);
                el.focus();
            },
            update(){
                console.log('update');
            }
        }
    },
    components:{
        box
    }
}
</script>
<style>
.v-enter,.v-leave-to{
    opacity: 0;
    transform: scale(0);
}
.v-enter-active,.v-leave-active{
    transition: all 2s;
}
.v-enter-to,.v-leave{
    opacity: 1;
    transform: scale(1);
}
.a-enter,.a-leave-to{
    opacity: 0;
    transform: translateX(-100%);
}
.a-enter-active,.a-leave-active{
    transition: all 2s;
}
.a-enter-to,.a-leave{
    opacity: 1;
    transform: translateX(0);
}

.b-enter,.b-leave-to{
    opacity: 0;
    transform: rotate(360deg);
}
.b-enter-active,.b-leave-active{
    transition: all 2s;
}
.b-enter-to,.b-leave{
    opacity: 1;
    transform: rotate(0);
}
</style>


