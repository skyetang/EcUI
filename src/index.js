/**
 * Created by lucas on 2017/7/27.
 */

import EcHeader from './components/frame/header';
import EcContainer from './components/frame/container';
import EcSideNav from './components/frame/sideNav';

const components = {
  EcHeader,
  EcContainer,
  EcSideNav,
};

const install = (Vue) => {
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key]);
  });
};

export default {
  install,
};
