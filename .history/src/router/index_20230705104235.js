import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/',
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: Login
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
