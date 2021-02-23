import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Civilizations',
    component: Home
  },
  {
    path: '/units',
    name: 'Units',
    // route level code-splitting
    // this generates a separate chunk (units.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "units" */ '../views/Units.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
