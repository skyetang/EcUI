import Vue from 'vue';
import msg from './message';

const MsgConstructor = Vue.extend(msg);
const MsgQuen = [];
let currentMsg;
let instance;
const defaultConfig = {
  title: '提示',
  message: '',
  type: '',
  action: '',
  customClass: '',
  showClose: true,
  showConfirmButton: true,
  showCancelButton: true,
  confirmButtonText: '确定',
  cancelButtonText: '取消',
  confirmButtonLoading: false,
  cancelButtonLoading: false,
  confirmButtonDisabled: false,
  cancelButtonDisabled: false,
  confirmButtonClass: '',
  cancelButtonClass: '',
  beforeClose: null,
  callback: null
};

const merge = (target, ...args) => {
  for (let i = 0, j = args.length; i < j; i += 1) {
    const source = args[i] || {};
    Object.keys(source).forEach((key) => {
      if (source[key] !== undefined) {
        target[key] = source[key];
      }
    });
  }
  return target;
};

const defaultCallback = (action) => {
  if (currentMsg) {
    const cb = currentMsg.callback;
    if (typeof cb === 'function') {
      cb(action);
    }
    if (currentMsg.resolve) {
      if (action === 'confirm') {
        currentMsg.resolve(action);
      } else if (action === 'cancel' && currentMsg.reject) {
        currentMsg.reject(action);
      }
    }
  }
};

const InitInstance = () => {
  instance = new MsgConstructor({
    el: document.createElement('div')
  });
  instance.callback = defaultCallback;
};

const showMessage = () => {
  if (!instance) {
    InitInstance();
  }
  instance.action = '';
  if (!instance.show) {
    if (MsgQuen.length > 0) {
      currentMsg = MsgQuen.shift();
      const options = currentMsg.options;
      Object.keys(options).forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(options, key)) {
          instance[key] = options[key];
        }
      });
      if (options.callback === undefined || options.callback === null) {
        instance.callback = defaultCallback;
      }
    }
    document.body.appendChild(instance.$el);
    Vue.nextTick(() => {
      instance.show = true;
    });
  }
};

const Message = (options, callback, ...args) => {
  if (typeof options === 'string') {
    options = {
      message: options
    };
    if (typeof callback === 'string') {
      options.title = callback;
    }
    if (args.length > 0 && typeof args[0] === 'string') {
      options.type = args[0];
    }
  } else if (options.callback && !callback) {
    callback = options.callback;
  }
  if (typeof Promise !== 'undefined') {
    return new Promise((resolve, reject) => {
      MsgQuen.push({
        options: merge({}, defaultConfig, options),
        callback,
        resolve,
        reject
      });
      showMessage();
    });
  }
  MsgQuen.push({
    options,
    callback
  });
  showMessage();
  return false;
};

export default Message;
