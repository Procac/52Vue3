import Vue from 'vue'
import VueRouter from 'vue-router'
import One from "../components/One";
import First from '../components/First.vue'
import Three from '../components/Three.vue'
import End from '../components/End.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'One',
    component: One
  },
  {
    path: '/First',
    name: 'First',
    component: First
  },
  {
    path: '/Three',
    name: 'Three',
    component: Three
  },
  {
    path: '/End',
    name: 'End',
    component: End
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
