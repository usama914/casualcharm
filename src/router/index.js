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
  },
  {
    path: '/about',
    component: () => import('@/Pages/about/aboutPage.vue')
  },
  {
    path: '/faqs',
    component: () => import('@/Pages/faq/faqPage.vue')
  },
  {
    path: '/contact',
    component: () => import('@/Pages/contact/contactPage.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
