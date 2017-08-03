import Vue from 'vue';
import MaskLayout from './mask';
const Mask = Vue.extend(MaskLayout);

const manager = {
  instances: [],
  mask: false,
  /**
   * =======================
   * 当实例不存在或实例已经存在缓存中，直接返回，不作任何处理，否则执行下一步
   * 判断遮罩是否存在，不存在就创建遮罩，否则不创建遮罩，直接进行下一步
   * 将当前实例添加到缓存中
   * 更改当遮罩属性
   * ========================
   */
  show(instance) {
    if (!instance || this.instances.indexOf(instance) !== -1) return;
    if (!this.mask) {
      this.showMask(instance);
    }
    this.instances.push(instance);
    this.changeMaskIndex();
  },
  /**
   * =======================
   * 当前实例关掉，则从缓存中去除该实例
   * 如果缓存中已经没有实例存在，则将遮罩关闭掉
   * 如果还有实例存在，则更新遮罩属性
   * ========================
   */
  hide(instance) {
    const index = this.instances.indexOf(instance);
    if (index === -1) return;
    this.instances.splice(index, 1);
    if (this.instances.length === 0) {
      this.hideMask();
      return;
    }
    this.changeMaskIndex();
  },
  /**
   * =======================
   * 打开遮罩
   * ========================
   */
  showMask(instance) {
    this.mask = new Mask({
      el: document.createElement('div')
    });
    this.mask.bgColor = instance.maskBgColor;
    this.mask.opacity = instance.maskOpacity;
    this.mask.zIndex = instance.maskIndex;
    document.body.append(this.mask.$el);
  },
  /**
   * =======================
   * 关闭遮罩
   * ========================
   */
  hideMask() {
    if (!this.mask) return;
    this.mask.$el.remove();
    this.mask.$destroy();
    this.mask = false;
  },
  /**
   * =======================
   * 更新遮罩属性
   * ========================
   */
  changeMaskIndex() {
    if (!this.mask || this.instances.length === 0) return;
    const instance = this.instances[ this.instances.length - 1 ];
    this.mask.bgColor = instance.maskBgColor;
    this.mask.opacity = instance.maskOpacity;
    this.mask.zIndex = instance.maskIndex;
  }
};

export default manager;
