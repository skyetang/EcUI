<template>
    <div class="form-item clear-fix" :style="itemStyle" :class="{'pct100':singleLine || !parentForm.inline}">
      <label class="form-item-label" :style="labelStyle" v-if="label">
        {{label}}
      </label>
      <div class="form-item-content" :style="contentStyle">
        <slot></slot>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'EcFormItem',
    props: {
      lableWidth: {
        type: String
      },
      label: {
        type: String
      },
      singleLine: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      itemStyle() {
        const style = {};
        if (this.parentForm.inline) {
          style.width = '30%';
        }
        return style;
      },
      labelStyle() {
        const style = {};
        const width = this.lableWidth || this.parentForm.labelWidth;
        if (width) {
          style.width = width;
        }
        return style;
      },
      contentStyle() {
        const style = {};
        if (this.singleLine) {
          style.flex = '1';
          style.paddingRight = '20px';
        }
        return style;
      },
      parentForm() {
        let parent = this.$parent;
        while (parent.$options.name !== 'EcForm') {
          parent = parent.$parent;
        }
        return parent;
      }
    },
    methods: {

    }

  };
</script>



