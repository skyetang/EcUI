import Button from '../example/button';
import Dialog from '../example/dialog';
import Tab from '../example/tab';
import Menu from '../example/menu';

export default [
  {
    path: '/button',
    name: 'button',
    title: 'button 按钮',
    component: Button
  }, {
    path: '/dialog',
    name: 'dialog',
    title: 'dialog 弹出框',
    component: Dialog
  }, {
    path: '/tab',
    name: 'tab',
    title: 'tab 标签',
    component: Tab
  }, {
    path: '/menu',
    name: 'menu',
    title: 'menu 菜单',
    component: Menu
  }
];
