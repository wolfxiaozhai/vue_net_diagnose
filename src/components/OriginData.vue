<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px" style="margin-top: 15px; margin-bottom: 15px;">
      <el-row :gutter="20" style="margin-bottom:5px;margin-top:5px;">
        <el-col :span="6">
          <el-input v-model="form.account" placeholder="商家名称"></el-input>
        </el-col>
        <el-col :span="6">
          <el-input v-model="form.srv_name" placeholder="业务名称"></el-input>
        </el-col>
        <el-col :span="4">
          <el-select v-model="form.status" clearable placeholder="请选择诊断状态">
            <el-option label="未诊断" value="未诊断"></el-option>
            <el-option label="已诊断" value="已诊断"></el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="margin-bottom:5px;margin-top:5px;">
        <el-col :span="6">
          <el-date-picker type="datetime" placeholder="创建时间" v-model="form.create_date"></el-date-picker>
        </el-col>
        <el-col :span="6">
          <el-date-picker type="datetime" placeholder="诊断时间" v-model="form.diagnose_date"></el-date-picker>
        </el-col>
        <el-col :span="6">
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-col>
      </el-row>
    </el-form>
    <el-table :data="tableData" stripe border style="width: 100%">
      <el-table-column prop="account" label="商家帐号" width="180"></el-table-column>
      <el-table-column prop="srv_name" label="业务名称" width="180"></el-table-column>
      <el-table-column prop="status" label="状态" width="180"></el-table-column>
      <el-table-column prop="reason_type" label="原因类型" width="180"></el-table-column>
      <el-table-column prop="op_name" label="操作人" width="180"></el-table-column>
      <el-table-column prop="create_date" label="创建时间"></el-table-column>
      <el-table-column prop="diagnose_date" label="诊断时间"></el-table-column>
      <el-table-column :context="_self" inline-template label="操作">
        <div>
            <el-button size="small" @click="handleEdit($index, row)">编辑</el-button>
            <el-button size="small" type="danger" @click="handleDelete($index, row)">删除</el-button>
        </div>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {

    data () {
      return {
        tableData: [],
        form: {
          account: '',
          srv_name: '',
          status: '',
          create_date: '',
          diagnose_date: '',
        }
      }
    },
    mounted () {
        this.getOriginData()
    },
    methods: {
      getOriginData () {
        $.ajax({
          type: 'get',
          url: "http://127.0.0.1:7000/api/get_diagnose_data/",
          dataType: "json",
          success: (data) => {
            this.tableData = data.data
          }
        })
      },
      handleEdit (index, row) {
        alert("edit this line");
      },
      handleDelete (index, row) {
        alert("delete this line");
      },
      onSubmit() {
        let formData = this.form;
        let create_date = formData.create_date;
        let create_ts = 0;
        if (create_date.toString() != ''){
          create_ts = create_date.getTime()
        };
        let diagnose_ts = 0;
        let diagnose_date = formData.diagnose_date;
        if (diagnose_date.toString() != ''){
          diagnose_ts =  diagnose_date.getTime()
        };
        let params = {
          'account': formData.account,
          'srv_name': formData.srv_name,
          'status': formData.status,
          'create_date': create_ts,
          'diagnose_date': diagnose_ts
        };
        $.ajax({
          type: "post",
          data: params,
          url: "http://127.0.0.1:7000/api/get_diagnose_data/",
          dataType: "json",
          success: (data) => {
            this.tableData = data.data
          }
        })
      }
    }
  }
</script>