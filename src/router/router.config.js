import Button from '../example/button';
import Dialog from '../example/dialog';
import Message from '../example/message';
import Tab from '../example/tab';
import Menu from '../example/menu';
import Table from '../example/table';
import Page from '../example/page';
import Pagination from '../example/pagination';

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
    path: '/message',
    name: 'message',
    title: 'message 确认弹框',
    component: Message
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
  }, {
    path: '/table',
    name: 'table',
    title: 'table 表格',
    component: Table
  }, {
    path: '/pagination',
    name: 'pagination',
    title: 'pagination 翻页',
    component: Pagination
  }, {
    path: '/page',
    name: 'page',
    title: 'page 详情页',
    component: Page
  }
];
