<template>
    <ul>
        <li v-for="item in list"
        :key="item.id">
            <h2>{{item.title}}</h2>
            <myul v-if="item.children" :list="item.children"></myul>
        </li>
    </ul>
</template>
<script>
export default {
    name:'myul',
    props:{
        list:Array
    }
}
</script>

