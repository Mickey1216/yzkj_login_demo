import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from '../views/Register.vue'
import LoginView from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/register',
      name: 'home',
      component: RegisterView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    }
  ]
})

export default router
