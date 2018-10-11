import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Search from './views/Search'
import Watch from './views/Watch'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/search/results/:searchTerm",
      component: Search
    },
    {
      path: "/watch",
      component: Watch
    },
  ]
})
