import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/a/'),
  routes: [
    {
      path: '/',
      name: 'layout',
      redirect: '/demo1/home',
      children: [
        {
          path: '/demo1/:page*',
          name: 'demo1',
          component: () => import('../views/demo1.vue'),
        },
      ],
    },
  ],
})

export default router

