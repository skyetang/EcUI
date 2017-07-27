import Vue from 'vue';
import Router from 'vue-router';
import ReferInventory from '@/components/refer/inventory';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/ReferInventory',
      name: 'ReferInventory',
      component: ReferInventory,
    },
  ],
});
