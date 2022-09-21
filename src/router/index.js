import { createRouter, createWebHashHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import OtherWorks from '../components/OtherWorks.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HelloWorld
  },
  {
    path: '/work',
    name: 'work',
    component: OtherWorks
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
