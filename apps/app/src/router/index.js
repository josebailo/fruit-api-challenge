import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Fruit from '@/views/Fruit'
import AddFruit from '@/views/AddFruit'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/fruit/add',
    name: 'AddFruit',
    component: AddFruit
  },
  {
    path: '/fruit/:id',
    name: 'Fruit',
    component: Fruit
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
