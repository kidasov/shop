import Router from 'vue-router';

export default new Router({
  routes: [
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