<template>
  <ec-page @close="close">
    <div class='page-space'>
      <div>员工档案</div>
      <div>档案编号：ISO20097865</div>
    </div>
    <ec-page-item>
      <ec-form label-width="90px" :inline="true">
        <ec-form-item label="工号：">
          <el-input v-model='formData.jobNumber'></el-input>
        </ec-form-item>
        <ec-form-item label='性别：'>
          <el-radio class='radio' v-model='formData.sex' label='1'>男</el-radio>
          <el-radio class='radio' v-model='formData.sex' label='2'>女</el-radio>
        </ec-form-item>
        <ec-form-item label='入职时间：'>
          <el-date-picker v-model='formData.enterDate' type='datetime' placeholder='选择日期'></el-date-picker>
        </ec-form-item>
        <ec-form-item label="姓名：">
          <el-input v-model='formData.jobNumber'></el-input>
        </ec-form-item>
        <ec-form-item label="身份证号码：">
          <el-input v-model='formData.jobNumber'></el-input>
        </ec-form-item>
        <ec-form-item label='*转证日期：'>
          <el-input v-model='formData.confirmationDate'></el-input>
        </ec-form-item>
        <ec-form-item label='部门：'>
          <el-col :span="12">
            <el-select v-model='formData.roleName' placeholder='请选择'>
              <el-option
                v-for='item in roleListData'
                :key='item.code'
                :label='item.name'
                :value='item.code'>
              </el-option>
            </el-select>
          </el-col>
          &nbsp;
          <el-col :span="12">
            <el-select v-model='formData.roleName' placeholder='请选择'>
              <el-option
                v-for='item in roleListData'
                :key='item.code'
                :label='item.name'
                :value='item.code'>
              </el-option>
            </el-select>
          </el-col>
        </ec-form-item>
        <ec-form-item label='*手机号码：'>
          <el-input v-model='formData.phone'></el-input>
        </ec-form-item>
        <ec-form-item label="选择手机号：">
          <el-input v-model="formData.phone">
            <template slot="append"><i class="icon-add"></i></template>
          </el-input>
        </ec-form-item>
        <ec-form-item label='岗位：'>
          <el-select v-model='formData.roleName' placeholder='请选择'>
            <el-option
              v-for='item in roleListData'
              :key='item.code'
              :label='item.name'
              :value='item.code'>
            </el-option>
          </el-select>
        </ec-form-item>
        <ec-form-item  label='*工作邮箱：'>
          <el-input v-model='formData.email'></el-input>
        </ec-form-item>
      </ec-form>
    </ec-page-item>
    <ec-page-item>
      <ec-form label-width="90px">
        <ec-form-item label="上传图片：">
          <el-input v-model="formData.phone">
            <template slot="append"><i class="icon-add"></i></template>
          </el-input>
        </ec-form-item>
      </ec-form>
    </ec-page-item>
    <ec-page-item>
      <ec-tabs :value.sync="tabStatus" type="top" :min-width="true">
        <ec-tab value="level"><i class="icon-contacts icon-left"></i>评级信息</ec-tab>
        <ec-tab value="contact"><i class="icon-contacts icon-left"></i>联系人</ec-tab>
        <ec-tab value="address"><i class="icon-freight__address"></i>货运地址</ec-tab>
      </ec-tabs>
      <div style="margin-top: 20px">
        <el-table border :data="roleListData" class="ec-table-page">
          <el-table-column prop="code" label="日期" min-width="10"></el-table-column>
          <el-table-column prop="name" label="姓名" min-width="30"></el-table-column>
          <el-table-column prop="entCode" label="地址" min-width="50"></el-table-column>
        </el-table>
      </div>
      <div style="margin-top: 20px">
        <ec-button>新增</ec-button>
      </div>
    </ec-page-item>
    <template slot='footer'>
      <ec-button>测试footer</ec-button>
    </template>
  </ec-page>
</template>

<script>
  export default {
    data() {
      return {
        tabStatus: 'level',
        formData: {
          jobNumber: '',
          employeeName: '',
          idCard: '',
          confirmationDate: '',
          firstDeptName: '',
          phone: '',
          roleName: '',
          email: '',
          enterDate: '',
          sex: '1'
        },
        roleListData: [
          {
            code: '33221100',
            name: '设计师',
            entCode: '85562440',
            postSet: true,
            authorized: false
          },
          {
            code: '64931429',
            name: '人事专员',
            entCode: '85562440',
            postSet: true,
            authorized: false
          },
          {
            code: '65452684',
            name: '行政专员',
            entCode: '85562440',
            postSet: true,
            authorized: false
          }]
      };
    },
    methods: {
      close() {
        this.$router.push('/pagination');
      }
    }
  };
</script>

<style lang='less'>

</style>


