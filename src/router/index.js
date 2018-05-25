import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '@/components/404'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
