import Vue from 'vue';
import Router from 'vue-router';
import RouterConfig from './router.config';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: RouterConfig
});

router.afterEach((route) => {
  if (route.meta.title) {
    document.title = `${route.meta.title}-云集前端`;
  }
});

export default router;
