import { createRouter, createWebHistory } from 'vue-router'
import signup from '../views/SignUpView.vue'
import getallnotes from '../views/getallnotesView.vue'
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
    path:'/',
    name:'login',
    component:()=>import('../views/Loginvue.vue')
  },
  {
    path:'/signup',
    name:'signup',
    component:signup
  },{
    path:'/forgotpass',
    name:'forgotpass',
    component:()=>import('../views/ForgotView.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path:'/getallnotes',
    name:'getallnotes',
    component:getallnotes
  },
  
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  let isAuthenticated = false;
  if (token) {
    isAuthenticated = true;
  }
  
  if (to.name !== 'login' && !isAuthenticated) {
    next({ name: 'login' }); 
  } else {
    next(); 
  }
});
export default router
