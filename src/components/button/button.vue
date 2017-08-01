<template>
  <button :disabled="disabled" class="button"
          @click="handleClick"
          :type="nativeType"
          :class="[type ? 'button-' + type : '',{'is-disabled': disabled,}]">
    <slot></slot>
  </button>
</template>
<script>
  export default {
    name: 'EcButton',
    props: {
      type: {
        type: String,
        default: 'default',
      },
      nativeType: {
        type: String,
        default: 'button',
      },
      disabled: Boolean,
    },

    methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      },
    },
  };
</script>
