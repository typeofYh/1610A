<template>
    <div id="app">
        <myUl :list="list"></myUl>
        <!-- <ul>
            <li>
                <h2>插槽</h2>
                <ul>
                    <li>
                        <h2>插槽内容</h2>
                    </li>
                    <li>
                        <h2>编译作用域</h2>
                    </li>
                    <li>
                        <h2>作用域插槽</h2>
                        <ul>
                            <li>
                                <h2>独占默认插槽的缩写语法</h2>
                            </li>
                            <li>
                                <h2>解构插槽-Prop</h2>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <h2>动态组件 & 异步组件</h2>
            </li>
        </ul> -->
    </div>
</template>
<script>
import list from './mock/index'
import myUl from './components/myul';
export default {
    data(){
        return {
            list
        }
    },
    components:{
        myUl
    }
}
</script>

