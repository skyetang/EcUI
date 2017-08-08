/**
 * Created by Skye on 2017/8/5.
 */

import Axios from 'axios';
import qs from 'qs';
import API from './api/index';
import EcUI from './components/index';
import VueQueryString from './utils/vueQueryString';
import VueAxios from './utils/vueAxios';

const install = (Vue) => {
  window.API = API;
  window.PAGE_SIZE = 50;
  Vue.use(EcUI);
  Vue.use(VueAxios, Axios);
  Vue.use(VueQueryString, qs);
};

export default { install };
export { default as EcRouter } from './router/router.config';
