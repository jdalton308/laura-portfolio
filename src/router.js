import Vue from 'vue'
import Router from 'vue-router'
import Landing from './views/landing.vue'


Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    },
  ]
})
