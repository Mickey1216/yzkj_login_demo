import { createRouter, createWebHistory } from 'vue-router'
import H from '../views/login.vue'
import LoginView from '../views/login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ]
})

export default router
