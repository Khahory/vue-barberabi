import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: function () {
      return import( '../views/About.vue')
    }
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: function () {
      return import( '../views/Gallery.vue')
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Contact.vue')
    }
  },
  {
    path: '/mio',
    name: 'Mio',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Mio.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
