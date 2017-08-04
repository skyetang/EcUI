// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Axios from 'axios';
import qs from 'qs';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import { EcUI, VueQueryString, VueAxios } from './components/index';
import './assets/style/index.less';
import App from './App';
import router from './router';

Vue.use(ElementUI);
Vue.use(EcUI);
Vue.use(VueAxios, Axios);
Vue.use(VueQueryString, qs);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
