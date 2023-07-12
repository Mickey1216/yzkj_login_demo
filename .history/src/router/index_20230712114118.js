import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
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

// 全局前置守卫
router.beforeEach((to, from, next) => {
  // 可以任意进入注册页面
  if(to.path === '/register')
    
  if(to.path !== '/login' && !localStorage.getItem('token'))
    next('/login')
  else
    next()
})

export default router
