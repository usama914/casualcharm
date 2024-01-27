import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/Pages/Home/HomePage.vue')
  },
  {
    path: '/allposts',
    component: () => import('@/Pages/Posts/indexPage.vue')
  },
  {
    path: '/details/:id',
    component: () => import('@/Pages/post-details/indexPage.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
