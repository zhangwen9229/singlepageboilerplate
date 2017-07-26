import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default[
  {
    path : '/',
    name : 'home',
    component : resolve => require(['@/pages/home/index.vue'], resolve),
    meta : {
      root: true,
      showtab: true
    }
  }
]
