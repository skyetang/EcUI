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
  axios.interceptors.request.use((config) => {
    if (sessionStorage.getItem('PostCode') === null
      || sessionStorage.getItem('PostCode') === undefined) {
      return config;
    }
    config.headers.postCode = sessionStorage.getItem('PostCode');
    return config;
  });

  Object.defineProperties(VueAxios.prototype, {
    $http: {
      get() {
        return axios;
      }
    }
  });
}
