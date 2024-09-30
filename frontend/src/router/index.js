import { createWebHistory, createRouter } from 'vue-router'
import AppHome from '../views/AppHome.vue';
import AvailableCourses from '../views/AvailableCourses.vue';

const routes = [
  {
    path: '/',
    component: AppHome,
  },
  {
    path: '/courses',
    component: AvailableCourses,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;

