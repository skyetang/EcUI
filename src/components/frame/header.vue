<template>
  <div class="header">
    <div class="list-wrap">
      <img class="ent-logo" :src="entLogo">
      <div class="title" :title="userInfo.entName">{{userInfo.entName}}</div>
      <div class="switch-btn" v-if="accountList.length >1" @click="switchAccount">切换企业账套 <span class="arrow"></span>
      </div>
    </div>
    <div class="opt-wrap">
      <a href="javascript:;" class="admin-opt" v-if="isAdmin">
        <span class="icon-manager__init"></span><span>管理员</span>
      </a>
      <img class="avatar" :src="userLogo">
      <span class="line">{{userInfo.userName}}</span>
      <a class="logout" href="/ierp/logout">退出</a>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import userLogo from '../../assets/images/userLogo.png';
  import adminLogo from '../../assets/images/adminLogo.png';
  import entLogo from '../../assets/images/entLogo.png';

  export default {
    name: 'ec-header',
    data() {
      return {
        /* 企业logo */
        entLogo,
        /* 用户logo */
        userLogo,
        /* 跳转到管理界面图标 */
        adminLogo,
        defaultEntLogo: entLogo,
        userInfo: {},
        accountList: [],
      };
    },
    computed: {
      isAdmin() {
        return this.userInfo.admin && this.userInfo.admin === 1;
      },
    },
    mounted() {
      this.getUserInfo();
    },
    methods: {
      getUserInfo() {
        axios.post('/ierp/hr-pc/v1/pc/hr/get/user')
          .then(
            (res) => {
              if (res.data.success) {
                this.userInfo = res.data.data;
                sessionStorage.setItem('UserInfo', JSON.stringify(res.data.data));
                /* 如果返回的数据中有logo，则替换。无则使用默认logo */
                this.entLogo = this.userInfo.entLogo == null ? entLogo : this.userInfo.entLogo;
                this.userLogo = this.userInfo.userLogo == null ? userLogo : this.userInfo.userLogo;
              }
            });
      },
      getEntList() {
        axios.post('/ierp/hr-pc/v2/user/ents')
          .then(
            (res) => {
              if (res.data.success) {
                this.accountList = res.data.data;
              }
            });
      },
    },
  };
</script>

<style lang="less">

</style>
