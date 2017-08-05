/**
 * Created by Skye on 2017/8/5.
 */
import { EcSideErp, EcSideInit, EcSideAdmin } from './side/index';
import EcHeadInfo from './head';

const components = {
  EcSideErp,
  EcSideInit,
  EcSideAdmin,
  EcHeadInfo
};

const install = (Vue) => {
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key]);
  });
};

export default { install };
