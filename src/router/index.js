import { createRouter, createWebHistory } from 'vue-router'
import MarketplaceView from '../views/MarketplaceView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MarketplaceView',
      component: MarketplaceView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/bot',
      name: 'bot',
      component: () => import('../views/BotView.vue')
    }
  ]
})

export default router
