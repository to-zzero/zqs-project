import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/view/main.vue'

const CircleProgress = () => import('@/view/canvas/circle_progress')

Vue.use(Router)

const mainChildren = [
  // {
  //   path: '/',
  //   name: 'Main',
  //   component: Main
  // }
  {
    path: '/canvas',
    name: 'canvas',
    component: CircleProgress
  }
]

const routes = [
  {
    path: '/',
    component: Main,
    children: mainChildren
  }
]

const router = new Router({
  mode: 'history',
  routes
})

export default router
