import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from '../views/Register.vue'

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
    },
    {
      path: '/list',
      name: 'list'
    }
  ]
})

export default router