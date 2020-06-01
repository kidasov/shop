import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/routes/Dictionary')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/routes/Login')
    },
    {
      path: '/dictionary',
      name: 'dictionary',
      component: () => import('@/routes/Dictionary')
    },
  ]
});