import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import('@/views/home.vue')
    },
    {
      path: '/my',
      name: 'my',
      component: ()=>import('@/views/m.vue')
    },
    {
      path: '/type',
      name: 'type',
      component: ()=>import('@/views/type.vue')
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      component: ()=>import('@/views/shopcar.vue')
    }
  ]
})
