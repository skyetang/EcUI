<template>
  <transition name="dialog-fade">
    <div class="dialog" v-show="show" >
      <div class="dialog-head">
        <span>{{title}}</span>
        <i v-if="showClose" class="icon-modal__close cursor" @click="close"></i>
      </div>
      <slot></slot>
      <div class="dialog-footer">
        <slot name="footer">
          <ec-button :loading="cancelLoading" type="plain-default" @click="cancel">取消</ec-button>
          <ec-button :loading="confirmLoading" @click="confirm">确定</ec-button>
        </slot>
      </div>
    </div>
  </transition>
</template>

<script>
  import popMixin from '../popup';

  export default {
    name: 'EcDialog',
    mixins: [popMixin],
    props: {
      title: {
        type: String,
        default: '提示'
      },
      showClose: {
        type: Boolean,
        default: true
      },
      confirmLoading: {
        type: Boolean,
        default: false
      },
      cancelLoading: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      close() {
        this.doClose();
        this.$emit('close');
      },
      cancel() {
        this.doClose();
        this.$emit('cancel');
      },
      confirm() {
        this.$emit('confirm');
      }
    }
  };
</script>

<style lang="less">


</style>

