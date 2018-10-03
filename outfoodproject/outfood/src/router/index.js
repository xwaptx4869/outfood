import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import goods from '../components/goods.vue'
import ratings from '../components/ratings.vue'
import sellers from '../components/sellers.vue'
import header from '../components/header.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'page',
      component: goods
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/header',
      name: 'header',
      component: header
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    },
    {
      path: '/sellers',
      name: 'sellers',
      component: sellers
    }
  ]
})
