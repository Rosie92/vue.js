import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue' // HomeView를 갖다 씀

const routes = [
  {
    path: '/', // URL 경로
    name: 'home',
    component: HomeView
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue') // 위의 import와 동일한 기능
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
