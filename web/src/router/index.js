import Vue from 'vue'
import Router from 'vue-router'
import Box from '@/views/box.vue'
import Login from '@/views/login.vue'
import home from '@/views/home.vue'
import test from '@/views/test.vue'

const Newest = () => import('@/views/newest.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      component: Box,
      redirect: '/home',
      children: [
        { path: '/home', component: home }
      ]
    },
    {
      path: '/upload',
      component: home
    },
    {
      path: '/test',
      component: test
    }
  ]
})
