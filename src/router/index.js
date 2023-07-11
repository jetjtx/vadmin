import { createRouter, createWebHistory } from 'vue-router'
import AdminLayout from '@/views/layout'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/signin',        component: ()   => import('@/views/HomeView.vue'),
    },
    {
      path: '/',
      redirect: '/signin',
      component: AdminLayout,
      // beforeEnter: guardMyroute
      children: [
        { path: 'today',      component: () => import('@/views/TodayView.vue') },
        { path: 'sales',      component: () => import('@/views/Sales.vue') },
        { path: 'products',   component: () => import('@/views/Products.vue') },
        { path: 'customers',  component: () => import('@/views/Customers.vue') },
        { path: 'finance',    component: () => import('@/views/Finance.vue') },
        { path: 'chat',      component: () => import('@/views/Chat.vue') },
        { path: 'settings',   component: () => import('@/views/SettingsView.vue') },
        { path: 'about',      component: () => import('@/views/AboutView.vue') },
        { path: '/:pathMatch(.*)*', component: () => import('@/views/NotFound.vue') },
      ]
    },
    {
      path: '/:pathMatch(.*)*', component: () => import('@/views/NotFound.vue'),
    }
  ]
})

export default router
