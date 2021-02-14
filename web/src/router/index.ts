import { createRouter, createWebHistory } from 'vue-router';
import Login from "../routes/Login/index.vue";
import Dictionary from "../routes/Dictionary/index.vue";

export default createRouter({
  history: createWebHistory('/base-directory/'),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/dictionary',
      name: 'dictionary',
      component: Dictionary
    },
  ]
});