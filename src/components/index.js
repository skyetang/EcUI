/**
 * Created by lucas on 2017/7/27.
 */

import EcHeader from './frame/header';
import EcContainer from './frame/container';
import EcSideNav from './frame/sideNav';
import EcContainerItem from './frame/containerItem';
import EcButton from './button';
import EcCrystalButton from './crystalButton';

const components = {
  EcHeader,
  EcContainer,
  EcSideNav,
  EcContainerItem,
  EcButton,
  EcCrystalButton
};

const install = (Vue) => {
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key]);
  });
};

export default {
  install
};
