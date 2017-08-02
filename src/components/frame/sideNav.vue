<template>
  <div class="sidebar">
    <div class="logo-wrap">
      <span class="system-logo"></span>
      <span>我的经管</span>
    </div>
    <slot></slot>
    <!-- 帮助菜单  -->
    <div class="help-wrap">
      <a href="javascript:;">
        <span class="icon icon-user__help"></span>
        <span>帮助与反馈</span>
        <span class="reply-count" v-if="false"></span>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ec-side-nav'
  };
</script>
