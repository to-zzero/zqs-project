import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/view/main.vue'

Vue.use(Router)

const mainChildren = [
  // {
  //   path: '/',
  //   name: 'Main',
  //   component: Main
  // }
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
