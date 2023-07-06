import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'
import LoginView from '../views/login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: HomeView
    },
  ]
})

export default router
