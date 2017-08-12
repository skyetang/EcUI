/**
 * Created by lucas on 2017/7/27.
 */
import EcHeader from './frame/header';
import EcContainer from './frame/container';
import EcSideBar from './frame/sideBar';
import EcContainerItem from './frame/containerItem';
import EcButton from './button';
import EcText from './text';
import EcCrystalButton from './crystalButton';
import EcDialog from './dialog';
import { EcTab, EcTabs } from './tab';
import { EcMenu, EcSubmenu, EcMenuItem } from './menu';
import EcSideMenu from './sideMenu';
import { EcPage, EcPageItem } from './page';
import EcPagination from './pagination';
import { EcForm, EcFormItem } from './form';
import confirm from './confirm';
import EcUpload from './upload';
import EcPreviewImage from './previewImage';

const components = {
  EcHeader,
  EcContainer,
  EcSideBar,
  EcContainerItem,
  EcButton,
  EcText,
  EcCrystalButton,
  EcDialog,
  EcTab,
  EcTabs,
  EcMenu,
  EcSubmenu,
  EcMenuItem,
  EcSideMenu,
  EcPage,
  EcPageItem,
  EcPagination,
  EcForm,
  EcFormItem,
  EcUpload,
  EcPreviewImage
};

const install = (Vue) => {
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key]);
  });
  Vue.prototype.$ecConfirm = confirm;
};

export default { install };

