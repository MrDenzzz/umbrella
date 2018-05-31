import Vue from 'vue'
import Router from 'vue-router'
import Dota from '@/components/Dota'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dota',
      component: Dota
    }
  ]
})
