<template>
  <ec-page>
    <div class='page-space'>
      <div>员工档案</div>
      <div>档案编号：ISO20097865</div>
    </div>
    <div class='page-item'>
      <ec-form label-width="90px">
        <ec-form-item label="工号：">
          <el-input v-model='formData.jobNumber'></el-input>
        </ec-form-item>
        <ec-form-item label='性别：'>
          <el-radio class='radio' v-model='formData.sex' label='1'>男</el-radio>
          <el-radio class='radio' v-model='formData.sex' label='2'>女</el-radio>
        </ec-form-item>
        <ec-form-item label='入职时间：'>
          <el-date-picker v-model='formData.enterDate' type='datetime' placeholder='选择日期'>
          </el-date-picker>
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
          <el-input v-model='formData.idCard'></el-input>
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
        <ec-form-item style="width:100%" label='*工作邮箱：'>
          <el-input v-model='formData.email'></el-input>
        </ec-form-item>
      </ec-form>
      </el-form>
      <!--<el-form :inline="true"  label-width='120px' :model='formData' class='demo-form-inline'>
          <el-form-item style="width: 400px" label='工号：'>
            <el-input v-model='formData.jobNumber'></el-input>
          </el-form-item>
        <el-form-item label='姓名：'>
          <el-input v-model='formData.employeeName'></el-input>
        </el-form-item>
        <el-form-item label='*身份证号码：'>
          <el-input v-model='formData.idCard'></el-input>
        </el-form-item>
        <el-form-item label='*转证日期：'>
          <el-input v-model='formData.confirmationDate'></el-input>
        </el-form-item>
        <el-form-item label='部门：'>
          <el-input v-model='formData.idCard'></el-input>
        </el-form-item>
        <el-form-item label='*手机号码：'>
          <el-input v-model='formData.phone'></el-input>
        </el-form-item>
        <el-form-item label='*工作邮箱：'>
          <el-input v-model='formData.email'></el-input>
        </el-form-item>
        <el-form-item label='性别：'>
          <el-radio class='radio' v-model='formData.sex' label='1'>男</el-radio>
          <el-radio class='radio' v-model='formData.sex' label='2'>女</el-radio>
        </el-form-item>
        <el-form-item label='入职时间：'>
          <el-date-picker v-model='formData.enterDate' type='datetime' placeholder='选择日期'>
          </el-date-picker>
        </el-form-item>
        <el-form-item label='岗位：'>
          <el-select v-model='formData.roleName' placeholder='请选择'>
            <el-option
              v-for='item in roleListData'
              :key='item.code'
              :label='item.name'
              :value='item.code'>
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>-->
    </div>
    <div class='page-item'>
      <el-form>
        
      </el-form>
    </div>
    <template slot='footer'>
      <ec-button>测试footer</ec-button>
    </template>
  </ec-page>
</template>

<script>
  export default {
    data() {
      return {
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
    }
  };
</script>

<style lang='less'>

</style>


