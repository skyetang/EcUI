import Vue from 'vue';
import Router from 'vue-router';
import Button from '@/example/button';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/button',
      name: 'button',
      component: Button,
    },
  ],
});
