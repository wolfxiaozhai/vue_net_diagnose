<template>
  <div>
    <el-form ref="form"
      :model="form"
      label-width="80px" style="margin-top: 15px; margin-bottom: 15px;">
      <el-row
        :gutter="20"
        style="margin-bottom:5px;margin-top:5px;">
        <el-col :span="6">
          <el-input v-model="form.username" placeholder="商家名称"></el-input>
        </el-col>
        <el-col :span="6">
          <el-input v-model="form.service" placeholder="业务名称"></el-input>
        </el-col>
        <el-col :span="4">
          <el-select v-model="form.status" clearable placeholder="请选择处理状态">
            <el-option label="未解决" value="0"></el-option>
            <el-option label="处理中" value="1"></el-option>
            <el-option label="已解决" value="1"></el-option>
          </el-select>
        </el-col>
        <el-col :span="4">
          <el-select v-model="form.reason_type" clearable placeholder="请选择原因类型">
            <el-option label="未知" value="0"></el-option>
            <el-option label="域名劫持" value="1"></el-option>
            <el-option label="网络不通" value="2"></el-option>
            <el-option label="CDN问题" value="3"></el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row
        :gutter="20"
        style="margin-bottom:5px;margin-top:5px;">
        <el-col :span="6">
          <el-input v-model="form.op" placeholder="操作人"></el-input>
        </el-col>
        <el-col :span="6">
          <el-date-picker type="datetime" placeholder="创建时间" v-model="form.create_date"></el-date-picker>
        </el-col>
        <el-col :span="6">
          <el-date-picker type="datetime" placeholder="诊断时间" v-model="form.diagnose_date"></el-date-picker>
        </el-col>
        <el-col :span="6">
          <el-button type="primary" @click="getOriginData">查询</el-button>
        </el-col>
      </el-row>
    </el-form>
    <el-table
      v-loading.body="loading"
      element-loading-text="拼命加载中"
      :data="tableData"
      stripe border
      style="width: 100%">
      <el-table-column prop="username" label="商家帐号" ></el-table-column>
      <el-table-column prop="service" label="业务名称" ></el-table-column>
      <el-table-column prop="status" label="状态" ></el-table-column>
      <el-table-column prop="reason_type" label="原因类型" ></el-table-column>
      <el-table-column prop="op" label="操作人" ></el-table-column>
      <el-table-column prop="create_date" label="创建时间" ></el-table-column>
      <el-table-column prop="diagnose_date" label="诊断时间" ></el-table-column>
      <el-table-column :context="_self" inline-template label="操作" min-width="80">
        <div>
            <el-button size="small" class="net-diagnose-button">
              <router-link style="text-decoration:none" :to="{ name: 'edit', params: { row_index: id_list[$index] }}">编辑</router-link>
            </el-button>
        </div>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
        layout="total, prev, pager, next"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {

    data () {
      return {
        id_list: [],
        pageSize: 20,
        currentPage: 1,
        total: 0,
        tableData: [],
        loading: true,
        form: {
          username: '',
          service: '',
          status: '',
          reason_type: '',
          op: '',
          create_date: '',
          diagnose_date: ''
        }
      }
    },
    mounted () {
      this.getOriginData()
    },
    methods: {
      handleCurrentChange (val) {
        this.currentPage = val
        this.getOriginData()
      },
      getOriginData () {
        this.loading = true
        let formData = this.form
        let createDate = formData.create_date
        let createTs = 0
        if (createDate.toString() !== '') {
          createTs = createDate.getTime()
        }
        let diagnoseTs = 0
        let diagnoseDate = formData.diagnose_date
        if (diagnoseDate.toString() !== '') {
          diagnoseTs = diagnoseDate.getTime()
        }
        let params = {
          'page_size': this.pageSize,
          'current_page': this.currentPage,
          'username': formData.username,
          'service': formData.service,
          'status': formData.status,
          'reason_type': formData.reason_type,
          'op': formData.op,
          'create_ts': createTs,
          'diagnose_ts': diagnoseTs
        }
        $.ajax({
          type: 'post',
          data: params,
          url: '/api/dns/get_dns_detect_data/',
          dataType: 'json',
          success: (data) => {
            this.total = data.total
            this.tableData = data.data
            this.id_list = data.id_list
            this.loading = false
          }
        })
      }
    }
  }
</script>

<style>
.net-diagnose-button {
  padding: 7px 3px;
}
</style>
