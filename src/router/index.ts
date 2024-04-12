import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/admin-dashboard',
      name: 'admin-dashboard',
      component: () => import('../views/AdminDashboard.vue')
    },
    {
      path: '/stripe-payment',
      name: 'stripe-payment',
      component: () => import('../views/StripeCheckoutView.vue')
    },
    { 
      path: '/return', 
      name: 'return',
      component: () => import('../views/StripeReturnView.vue')
    }, 
  ]
})

export default router
