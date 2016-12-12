<template>
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
          <el-button type="primary" @click="saveRecord()">保存</el-button>
        </el-col>
      </el-row>
    </el-form>
</template>

<script>
  import $ from "jquery";
  export default {
    data () {
      return {
        form: {
          id: '',
          account: '',
          srv_name: '',
          status: '',
          create_date: '',
          diagnose_date: '',
        }
      }
    },
    mounted () {
      this.fetchRecord()
    },
    methods: {
      fetchRecord () {
        let record_id = this.$route.params.row_index;
        $.ajax({
          type: "post",
          data: {'record_id': record_id},
          url: "http://127.0.0.1:7000/api/get_diagnose_data_by_id/",
          dataType: "json",
          success: (data) => {
            console.log(data.data);
            this.form = data.data
          }
        })
      }
    },
    saveRecord () {
      alert("save");
    }

  }
</script>