import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      component: Home
    },
    {
      path: '/page1',
      beforeEnter(to, from, next) {
        window.location = "/page1.html"
      }
    },
    {
      path: '/page2',
      beforeEnter(to, from, next) {
        window.location = "/page2.html"
      }
    },
  ]
})
