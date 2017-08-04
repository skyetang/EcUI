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
          <ec-button type="danger" @click="quite">取消</ec-button>
          <ec-button @click="sure">确定</ec-button>
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
      }
    },
    methods: {
      close() {
        this.$emit('close');
      },
      quite() {
        this.$emit('close');
      },
      sure() {
        this.$emit('close');
        this.$emit('sure');
      }
    }
  };
</script>

<style lang="less">


</style>

