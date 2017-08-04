<template>
    <div>
      <div style="width: 300px;margin-bottom: 50px">
        <ec-tabs :value.sync="checkedTab" @change="tabChange">
          <ec-tab value="one">未审核</ec-tab>
          <ec-tab value="two">已审核</ec-tab>
        </ec-tabs>
      </div>

      <div>
        <ec-tabs :value.sync="checkedTab2" type="top" @change="tabChange2">
          <ec-tab value="level"><i class="icon-contacts icon-left"></i>评级信息</ec-tab>
          <ec-tab value="contact"><i class="icon-contacts icon-left"></i>联系人</ec-tab>
          <ec-tab value="address"><i class="icon-freight__address"></i>货运地址</ec-tab>
        </ec-tabs>
      </div>

    </div>
</template>

<script>
  export default {
    data() {
      return {
        checkedTab: 'one',
        checkedTab2: 'level'
      };
    },
    methods: {
      tabChange(val) {
        console.log(val);
      },
      tabChange2(val) {
        console.log(val);
      }
    }
  };
</script>

<style lang="less">

</style>


