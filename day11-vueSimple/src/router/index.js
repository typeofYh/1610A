import Vue from 'vue';
import VueRouter from 'vue-router'; //静态加载

Vue.use(VueRouter);

const router = new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'/bookcity'  //重定向
        },
        {
            path:'/bookcity',
            //运行时加载，会把这个文件单独打包成一个数据
            component:() => import('@/views/bookcity.vue')
        },
        {
            path:'/bookshelf',
            component:() => import('@/views/bookshelf.vue'),
        },
        {
            path:'/detail/:bookid',///detail/23123  /detail/12123
            //$route => {path:'/detail/23123',{params:{bookid:23123,ab:1212}}}
            component:()=>import('@/views/detail.vue')
        },
        {
            path:'/ready',
            beforeEnter(to,from,next){ 
                if(localStorage.getItem('user')){
                    next();
                }else{
                    next('/login');
                }
            },
            component:()=>import('@/views/ready.vue')
        },
        {
            path:'/login',
            component:()=>import('@/views/login.vue')
        },
        {
            path:'/user',
            component:()=>import('@/views/user.vue')
        }
    ]
})

export default router;