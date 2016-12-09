<template>
  <el-form ref="form" :model="form" label-width="80px" style="margin-top: 15px; margin-bottom: 15px;">
    <el-row :gutter="20" style="margin-bottom:5px;margin-top:5px;">
      <el-col :span="6">
        <el-input v-model="form.account" placeholder="商家名称"></el-input>
      </el-col>
      <el-col :span="6">
        <el-input v-model="form.srv_name" placeholder="业务名称"></el-input>
      </el-col>
      <el-col :span="6">
        <el-input v-model="form.status" placeholder="状态"></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="margin-bottom:5px;margin-top:5px;">
      <el-col :span="6">
        <el-date-picker type="date" placeholder="创建日期" v-model="form.create_date"></el-date-picker>
      </el-col>
      <el-col :span="6">
        <el-date-picker type="date" placeholder="诊断日期" v-model="form.diagnose_date"></el-date-picker>
      </el-col>
      <el-col :span="6">
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          account: '',
          srv_name: '',
          status: '',
          create_date: '',
          diagnose_date: '',
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>