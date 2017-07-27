/**
 * Created by lucas on 2017/7/27.
 */
import Container from './container';

Container.install = function (Vue) {
  Vue.component(Container.name, Container);
};

export default Container;
