import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import ikiThread from '@/pages/ikiThread'
import notFound from '@/pages/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/thread/:id',
      props: true,
      name: 'showthread',
      component: ikiThread
    },
    {
      path: '*',
      name: 'notFound',
      component: notFound
    }
  ],
  mode: 'history'
})
