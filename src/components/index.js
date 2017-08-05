/**
 * Created by lucas on 2017/7/27.
 */
import EcHeader from './frame/header';
import EcContainer from './frame/container';
import EcSideBar from './frame/sideBar';
import EcContainerItem from './frame/containerItem';
import EcButton from './button';
import EcCrystalButton from './crystalButton';
import EcDialog from './dialog';
import { EcTab, EcTabs } from './tab';
import { EcMenu, EcSubmenu, EcMenuItem } from './menu';
import EcSideMenu from './sideMenu';

const components = {
  EcHeader,
  EcContainer,
  EcSideBar,
  EcContainerItem,
  EcButton,
  EcCrystalButton,
  EcDialog,
  EcTab,
  EcTabs,
  EcMenu,
  EcSubmenu,
  EcMenuItem,
  EcSideMenu
};

const install = (Vue) => {
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key]);
  });
};

export default { install };

