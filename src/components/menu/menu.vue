<template>
      <ul class="menu">
        <slot></slot>
      </ul>
</template>

<script>
  export default {
    name: 'EcMenu',
    props: {
      defaultActive: {
        default: ''
      },
      defaultOpened: Array,
      uniqueOpened: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        activedIndex: this.defaultActive,
        openedMenus: this.defaultOpened ? this.defaultOpened.slice(0) : [],
        items: {},
        submenus: []
      };
    },
    watch: {
      defaultActive(val) {
        const item = this.items[val];
        if (item) {
          this.activedIndex = item.index;
        } else {
          this.activedIndex = '';
        }
      },
      defaultOpened: {
        handler(val) {
          this.openedMenus = val;
        },
        deep: true
      }
    },
    mounted() {
      this.initOpenedMenu();
    },
    methods: {
      addItem(item) {
        this.$set(this.items, item.index, item);
      },
      removeItem(item) {
        delete this.items[item.index];
      },
      addSubmenu(item) {
        this.$set(this.submenus, item.index, item);
      },
      removeSubmenu(item) {
        delete this.submenus[item.index];
      },
      /**
       * ================
       * 打开菜单
       * ================
       * */
      openMenu(index, indexPath) {
        const openedMenus = this.openedMenus;
        // 已经打开，不作任何操作
        if (openedMenus.indexOf(index) !== -1) return;
        // 将不在该菜单路径下的其余菜单收起
        if (this.uniqueOpened) {
          this.openedMenus = openedMenus.filter(
              keyIndex => indexPath.indexOf(keyIndex) !== -1
          );
        }
        this.openedMenus.push(index);
      },
      /**
       * ================
       * 关闭某个子菜单
       * ================
       * */
      closeMenu(index) {
        this.openedMenus.splice(this.openedMenus.indexOf(index), 1);
      },
      /**
       * ================
       * 处理有子级菜单的点击事件
       * ================
       * */
      handleSubmenuClick(submenu) {
        const { index, indexPath } = submenu;
        const isOpened = this.openedMenus.indexOf(index) !== -1;
        this.activedIndex = submenu.index;

        if (isOpened) {
          this.closeMenu(index, indexPath);
          this.$emit('close', index, indexPath);
        } else {
          this.openMenu(index, indexPath);
          this.$emit('open', index, indexPath);
        }
        this.$emit('select', index, indexPath, submenu);
      },
      /**
       * ================
       * 处理末级菜单的点击事件
       * ================
       * */
      handleItemClick(item) {
        const { index, indexPath } = item;
        this.activedIndex = item.index;
        this.$emit('select', index, indexPath, item);
      },
      /**
       *  ================
       *  初始化需要打开的菜单
       *  ================
       * */
      initOpenedMenu() {
        const index = this.activedIndex;
        const activeItem = this.items[index];
        if (!activeItem) return;

        const indexPath = activeItem.indexPath;

        // 展开该菜单路径上的子菜单
        indexPath.forEach((keyIndex) => {
          const submenu = this.submenus[keyIndex];
          if (submenu) {
            this.openMenu(keyIndex, submenu.indexPath);
          }
        });
      }
    }
  };
</script>

<style lang="less">

</style>


