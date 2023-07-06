import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from '../views/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/register',
    },
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
      name: 'list',
      component: () => import('../views/List.vue')
    },
    {
      path: '',
      meta: { title: "出错了！当前界面不存在" },
      component: () => import('../views/Error.vue')
    }
  ]
})


// router.beforeEach((to, from, next) => { // beforeEach是router的钩子函数，在进入路由前执行
//   if (to.matched.length === 0) {
//     next("/error")
//   }
// })

export default router
