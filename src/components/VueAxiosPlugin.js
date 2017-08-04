/**
 * Created by lucas on 2017/8/4.
 */

export default function plugin(Vue, axios) {
  const VueAxios = Vue;

  if (plugin.installed) {
    return;
  }
  plugin.installed = true;
  if (!axios) {
    console.error('You have to install axios');
    return;
  }

  VueAxios.axios = axios;

  Object.defineProperties(VueAxios.prototype, {
    $http: {
      get() {
        return axios;
      }
    }
  });
}
