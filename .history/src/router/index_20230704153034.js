import { createRouter, createWebHistory } from 'vue-router'
import Register from '../views/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/register',
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('../views/List.vue')
    },
    {
      path: '/:pathMatch(.*)',
      meta: { title: "出错了！当前界面不存在" },
      component: () => import('../views/Error.vue')
    }
  ]
})

export default router
