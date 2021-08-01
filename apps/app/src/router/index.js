import Vue from 'vue'
import VueRouter from 'vue-router'
import ListFruit from '@/views/ListFruit'
import ShowFruit from '@/views/ShowFruit'
import AddFruit from '@/views/AddFruit'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ListFruit',
    component: ListFruit
  },
  {
    path: '/fruit/add',
    name: 'AddFruit',
    component: AddFruit
  },
  {
    path: '/fruit/:id',
    name: 'ShowFruit',
    component: ShowFruit
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
