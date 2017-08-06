import Vue from 'vue';
import Router from 'vue-router';
import navConfig from './router.config';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: navConfig
});
