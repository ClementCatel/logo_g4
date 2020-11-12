import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Interactions from '../views/Interactions.vue'
import RA from "../views/RA";
import Downloads from '../views/Downloads.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/interactions',
    name: 'Interactions',
    component: Interactions
  },
  {
    path: '/realite-augmentee',
    name: 'RA',
    component: RA
  },
  {
    path: '/telechargements',
    name: 'Downloads',
    component: Downloads
  },
  {
    path: '*',
    name: '404',
    component: Home
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
