<template>
    <div>
        <my-header :back="false">
            <ul>
                <router-link to="/bookcity" tag="li">书城</router-link>
                <router-link to="/bookshelf" tag="li">书架</router-link>
            </ul>
            <router-link to="/user" class="user"><i></i></router-link>
        </my-header>
        <main>
            <div>
                <router-link to="/search" tag="div">
                    <p>请输入书名和作者</p>
                </router-link>
                <button @click="classname = classname==='leftblock' ? 'upblock' : 'leftblock'">切换视图</button>
            </div>
            <div>
                <dl-list
                v-for="(item,i) in list"
                :key="i"
                :title="item.title"
                :img="item.cover"
                :bookid="item.fiction_id"
                :classname="classname">
                    <div>
                        <p>{{item.authors}}</p>
                        <p>{{item.summary}}</p>
                        <p>{{item.latest}}</p>
                    </div>
                </dl-list>
            </div>
        </main>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[],
            classname:'leftblock'
        }
    },
    created(){
        this.$ajax.get('/api/bookshelf').then(res=>{
            this.list = res.data.items;
        })
    }
}
</script>

