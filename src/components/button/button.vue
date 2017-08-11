<template>
  <button :disabled="disabled"
          @click="handleClick"
          :type="nativeType"
          :class="['button',type ? 'button-' + type : '',{'is-disabled': disabled || loading}]">
    <i class="icon-left icon-loading" v-show="loading"></i>
    <slot></slot>
  </button>
</template>
<script>
  export default {
    name: 'EcButton',
    props: {
      type: {
        type: String,
        default: 'primary'
      },
      loading: {
        type: Boolean,
        default: false
      },
      nativeType: {
        type: String,
        default: 'button'
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      handleClick(evt) {
        if (this.loading) return;
        this.$emit('click', evt);
      }
    }
  };
</script>
