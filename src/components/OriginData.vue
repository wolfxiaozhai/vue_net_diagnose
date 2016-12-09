<template>
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
</template>

<script>
  import $ from 'jquery'

  export default {

    data () {
      return {
        tableData: []
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
            console.log(data.data);
            this.tableData = data.data
          }
        })
      },
      handleEdit (index, row) {
        alert("edit this line");
      },
      handleDelete (index, row) {
        alert("delete this line");
      }
    }
  }
</script>