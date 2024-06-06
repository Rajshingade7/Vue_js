import { createRouter, createWebHistory } from 'vue-router'
import signup from '../views/SignUpView.vue'
const routes= [

  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path:'/login',
    name:'login',
    component:()=>import('../views/Loginvue.vue')
  },
  {
    path:'/signup',
    name:'signup',
    component:signup
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})


export default router
