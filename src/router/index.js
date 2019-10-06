import Vue from 'vue'
import Router from 'vue-router'
import ImDay from '@/components/ImDay'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ImDay',
      component: ImDay
    }
  ]
})
