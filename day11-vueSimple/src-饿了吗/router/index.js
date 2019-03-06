import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/home';
import Discover from '@/views/discover';
import My from '@/views/my';
import Order from '@/views/order';
import Search from '@/views/search';
import Detail from '@/views/detail';



Vue.use(VueRouter);

let router = new VueRouter({ 
    mode:'history',//默认模式是hash 
    routes:[
        {
            path:'/',
            alias:['/home','/aa'],
            name:'index',
            component:Home
        },
        {
            path:'/order',
            component:Order
        }, {
            path:'/discover',
            component:Discover
        }
        , {
            path:'/prefile',
            component:My
        },
        {
            path:'/search',
            name:'search',
            component:Search
        },
        {
            path:'/shop',
            beforeEnter(to,from,next){
                next('/');
            }
        },
        {
            path:'/shop/:shopid', //:动态路由
            name:'shop',
            component:Detail,
            children:[
                {
                    path:'rx',
                    component:{
                        template:'<div><h2>热销</h2></div>'
                    }
                },
                {
                    path:'zp',
                    component:{
                        template:'<div><h2>招牌</h2></div>'
                    }
                }
            ]
        },
        {
            path:'/login',
            component:{
                template:'<div>login</div>'
            }
        }
    ]
})
router.beforeEach((to,from,next)=>{
    if(to.name==='search'){
        if(localStorage.getItem('user')){
            next();
        }else{
            next('/login')
        }
    }else{
        next();
    }
})
export default router;