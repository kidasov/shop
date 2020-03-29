import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/routes/Login')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/routes/Login')
    },
  ]
});