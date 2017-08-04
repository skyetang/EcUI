/**
 * Created by Skye on 2017/8/4.
 */
export default {
  computed: {
    indexPath() {
      const path = [this.index];
      let parent = this.$parent;
      while (parent.$options.name !== 'EcMenu') {
        if (parent.index) {
          path.unshift(parent.index);
        }
        parent = parent.$parent;
      }
      return path;
    },
    rootMenu() {
      let parent = this.$parent;
      while (parent && parent.$options.name !== 'EcMenu') {
        parent = parent.$parent;
      }
      return parent;
    },
    parentMenu() {
      let parent = this.$parent;
      while (parent && ['EcMenu', 'EcSubmenu'].indexOf(parent.$options.name) === -1) {
        parent = parent.$parent;
      }
      return parent;
    },
    paddingStyle() {
      let padding = 20;
      let parent = this.$parent;
      while (parent && parent.$options.name !== 'EcMenu') {
        if (parent.$options.name === 'EcSubmenu') {
          padding += 20;
        }
        parent = parent.$parent;
      }
      return { paddingLeft: `${padding}px` };
    }
  }
};
