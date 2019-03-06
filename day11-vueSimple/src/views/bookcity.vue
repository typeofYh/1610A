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
            <router-link to="/search" tag="div">
                <p>请输入书名和作者</p>
            </router-link>
            <div class="swiper-container banner">
                <ul class="swiper-wrapper">
                    <li class="swiper-slide"
                    v-for="item in swiperdata"
                    :key="item.id">
                        <img :src="item.ad_pic_url">
                    </li>
                </ul>
            </div>
            <div>
                <h2>本周最火</h2>
                <dl-list
                v-for="(item,i) in weekdata"
                :key="i"
                :title="item.title"
                :img="item.cover"
                :bookid="item.fiction_id"
                classname="upblock">
                </dl-list>
            </div>
            <div>
                <h2>重磅推荐</h2>
                <dl-list
                v-for="(item,i) in commit"
                :key="i"
                :title="item.title"
                :img="item.cover"
                :bookid="item.fiction_id"
                classname="leftblock">
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
import Swiper from 'swiper';
export default{
    data(){
        return {
            swiperdata:[],
            weekdata:[],
            commit:[]
        }
    },
    created(){
        this.$ajax.get('/api/home').then(res=>{
            this.swiperdata = res.data.items[0].data.data;
            this.weekdata = res.data.items[1].data.data;
            this.commit = res.data.items[2].data.data;
            console.log(this.commit);
            //当数据发生变化，dom结构更新完成之后触发一次
            this.$nextTick(()=>{
                new Swiper('.banner',{
                    autoplay:true
                })
            })
        })
    }
}
</script>
<style>

</style>


