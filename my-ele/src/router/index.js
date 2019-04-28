import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import HelloWorld from '@/components/HelloWorld'
import Manage from '@/components/manage.vue'
import User from '@/components/user'
import UserList from '@/components/userList.vue'
import shopList from '@/components/shopList.vue'
import foodList from '@/components/foodList.vue'
import orderList from '@/components/orderList.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
      children:[
          {
            path: '/man',
            name: 'HelloWorld',
            component: HelloWorld,
          },
          // {
          //   path: '/manage',
          //   name: 'manage',
          //   component: Manage,
          // },
          {
            path: '/user',
            name: 'user',
            component: User,
          },
          {
            path: '/userlist',
            name: 'userlist',
            component: UserList,
          },
          {
            path: '/shoplist',
            name: 'shoplist',
            component:shopList,
          },
          {
            path: '/foodList',
            name: 'foodList',
            component:foodList,
          },
          {
            path: '/orderList',
            name: 'orderList',
            component:orderList,
          }
      ]
    },
    
  ]
})
