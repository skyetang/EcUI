import Button from '../example/button';
import Dialog from '../example/dialog';
import Confirm from '../example/confirm';
import Tab from '../example/tab';
import Menu from '../example/menu';
import SideMenu from '../example/sideMenu';
import Table from '../example/table';
import Page from '../example/page';
import Pagination from '../example/pagination';
import Upload from '../example/upload';
import PreviewImage from '../example/previewImage';


export default [
  {
    path: '/button',
    name: 'button',
    meta: {
      title: 'button 按钮'
    },
    component: Button
  }, {
    path: '/dialog',
    name: 'dialog',
    meta: {
      title: 'dialog 弹出框'
    },
    component: Dialog
  }, {
    path: '/confirm',
    name: 'confirm',
    meta: {
      title: 'confirm 确认弹框'
    },
    component: Confirm
  }, {
    path: '/tab',
    name: 'tab',
    meta: {
      title: 'tab 标签'
    },
    component: Tab
  }, {
    path: '/menu',
    name: 'menu',
    meta: {
      title: 'menu 菜单'
    },
    component: Menu
  }, {
    path: '/SideMenu',
    name: 'SideMenu',
    meta: {
      title: 'SideMenu 菜单'
    },
    component: SideMenu
  }, {
    path: '/table',
    name: 'table',
    meta: {
      title: 'table 表格'
    },
    component: Table
  }, {
    path: '/pagination',
    name: 'pagination',
    meta: {
      title: 'pagination 翻页'
    },
    component: Pagination
  }, {
    path: '/page',
    name: 'page',
    meta: {
      title: 'page 详情页'
    },
    component: Page
  }, {
    path: '/upload',
    name: 'upload',
    meta: {
      title: 'upload  上传'
    },
    component: Upload
  }, {
    path: '/previewImage',
    name: 'previewImage',
    meta: {
      title: 'previewImage 图片预览'
    },
    component: PreviewImage
  }
];
