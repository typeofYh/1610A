<template>
    <div>
        <my-header>
           <span>{{$route.query.title}}</span>
           <router-link to="/">回首页</router-link>
        </my-header>
        <main>
            <div v-if="open">loading...</div>
            <div v-if="item.title">
                <dl-list
                :title="item.title"
                :img="item.cover"
                :bookid="item.fiction_id"
                classname="leftblock">
                    <div>
                        <p>{{item.authors}}</p>
                        <p>{{item.latest}}</p>
                    </div>
                </dl-list>
                <div>
                    <router-link to="/ready">开始阅读</router-link>
                    <button>下载</button>
                </div>
            </div>
            <div v-if="tip.mas">{{tip.mas}}</div>
        </main>
    </div>
</template>
<script>
export default {
    data(){
        return{
           item:{},
           tip:{},
           open:true
        }
    },
    watch:{
        '$route'(val,oldval){
            this.getdata(val.params.bookid);
        }
    },
    //当url地址发生变化没有重新创建组件
    // beforeRouteUpdate(to,from,next){
    //     this.getdata(to.params.bookid);
    //     next();
    // },
    //组件被创建时执行
    created(){
        this.getdata(this.$route.params.bookid);
    },
    methods:{
        getdata(id){
            this.item = {};
            this.tip = {};
            this.$ajax.get('/api/detail?bookid='+id).then(res=>{
                if(res.data.code===0){
                    this.tip = res.data
                }else{
                    this.item = res.data.item;
                }
                this.open = false;
            })
        }
    }
}
</script>

