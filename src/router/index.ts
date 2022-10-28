import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect:'/dashboard',
    children:[
      {
        path: '/dashboard',
        name: 'Dashboard',
        meta:{
          isbar:true,
          title:'Dashboard'
        },
        component: () => import(/* webpackChunkName: "Dashboard" */ '../views/Dashboard/Dashboard.vue')
      },
      {
        path: '/about',
        name: 'about',
        meta:{
          isbar:true,
          title:'关于'
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      },
      {
        path: '/message',
        name: 'Message',
        meta:{
          isbar:true,
          title:'信息'
        },
        component: () => import( '../views/Message/Message.vue')
      },
      {
        path: '/user',
        name: 'User',
        meta:{
          isbar:true,
          title:'用户信息'
        },
        component: () => import('../views/User/User.vue')
      },
    ]
  },
  
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
