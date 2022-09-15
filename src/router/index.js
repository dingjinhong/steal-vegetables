import Vue from 'vue'
import Router from 'vue-router'
import Farm from '@/pages/farm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Farm',
      component: Farm
    }
  ]
})
