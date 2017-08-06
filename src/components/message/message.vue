<template>
  <transition name="dialog-fade">
    <div class="dialog" v-show="show" >
      <div class="dialog-head">
        <span>{{title}}</span>
        <i v-if="showClose" class="icon-modal__close cursor" @click="handleClick('cancle')"></i>
      </div>
      <slot>
        <div class="dialog-content">{{message}}</div>
      </slot>
      <div class="dialog-footer">
        <slot name="footer">
          <ec-button type="danger" @click="handleClick('cancle')">取消</ec-button>
          <ec-button @click="handleClick('confirm')">确定</ec-button>
        </slot>
      </div>
    </div>
  </transition>
</template>

<script>
  import popMixin from '../popup';

  export default {
    mixins: [popMixin],
    data() {
      return {
        title: undefined,
        message: '',
        type: '',
        customClass: '',
        showClose: true,
        showConfirmButton: true,
        showCancelButton: false,
        action: '',
        confirmButtonText: '',
        cancelButtonText: '',
        confirmButtonLoading: false,
        cancelButtonLoading: false,
        confirmButtonClass: '',
        confirmButtonDisabled: false,
        cancelButtonClass: '',
        editorErrorMessage: null,
        callback: null
      };
    },
    methods: {
      handleClick(action) {
        this.show = false;
        if (this.callback) {
          this.callback(action, this);
        }
      }
    }
  };
</script>

<style lang="less">

</style>


