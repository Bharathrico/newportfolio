import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import OtherWorks from '../components/OtherWorks.vue'
import ProjectPage from '../components/ProjectPage.vue'
import AboutPage from '../components/AboutPage.vue'
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
  },
  {
    path: '/project',
    name: 'project',
    component: ProjectPage 
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage 
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
