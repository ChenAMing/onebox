import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      redirect: 'file',
      children: ['file', 'log', 'starred', 'share', 'recycled', 'settings'].map((name) => ({
        path: `/${name}`,
        name,
        component: () => import('@/views/MainView.vue'),
        ...(() => {
          if (name === 'file') {
            return {
              children: ['image', 'audio', 'video', 'code', 'document'].map((className) => ({
                path: `$/className}`,
                name: className,
                component: () => import('@/views/ClassView.vue'),
              })),
            }
          } else {
            return {}
          }
        })(),
      })),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
    },
  ],
})

export default router
