import Vue from 'vue';
import msg from './message';

const MsgConstructor = Vue.extend(msg);
const MsgQuen = [];
let currentMsg;
let instance;

const defaultCallback = (action) => {
  if (currentMsg) {
    console.log('c', currentMsg);
    const cb = currentMsg.callback;
    if (typeof cb === 'function') {
      cb(action);
    }
    if (currentMsg.resolve) {
      if (action === 'confirm') {
        currentMsg.resolve(action);
      } else if (action === 'cancle' && currentMsg.reject) {
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
  console.log('i', instance);
  console.log('m', MsgQuen);
  if (!instance.show) {
    if (MsgQuen.length > 0) {
      currentMsg = MsgQuen.shift();
      const options = currentMsg.options;
      console.log('0', options);
      Object.keys(options).forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(options, key)) {
          instance[key] = options[key];
        }
      });
      if (options.callback === undefined) {
        instance.callback = defaultCallback;
      }
    }
    document.body.appendChild(instance.$el);
    Vue.nextTick(() => {
      instance.show = true;
    });
  }
};

function Message(options, callback, ...args) {
  console.log(args);
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
  console.log(options);
  if (typeof Promise !== 'undefined') {
    return new Promise((resolve, reject) => {
      console.log('r', resolve);
      MsgQuen.push({
        options,
        callback,
        resolve,
        reject
      });
      showMessage();
    }).catch((reason) => {
      console.log(reason);
    });
  }
  MsgQuen.push({
    options,
    callback
  });
  showMessage();
  return false;
}

export default Message;
