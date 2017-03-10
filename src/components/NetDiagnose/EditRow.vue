<template>
  <div>
    <div style="display:block;padding-top:20px;">
      <el-form
        ref="form"
        :model="form"
        label-width="80px" style="margin-top: 15px; margin-bottom: 15px;">
        <el-row
          :gutter="20"
          style="margin-bottom:5px;margin-top:5px;">
          <el-col :span="6">
            <el-select v-model="form.status" clearable placeholder="请选择处理状态">
              <el-option label="未解决" value="0"></el-option>
              <el-option label="处理中" value="1"></el-option>
              <el-option label="已解决" value="2"></el-option>
            </el-select>
          </el-col>
          <el-col :span="6">
            <el-select v-model="form.reason_type" clearable placeholder="请选择原因类型">
              <el-option label="未知" value="0"></el-option>
              <el-option label="域名劫持" value="1"></el-option>
              <el-option label="网络不通" value="2"></el-option>
              <el-option label="CDN问题" value="3"></el-option>
            </el-select>
          </el-col>
          <el-col :span="6">
            <el-input type="textarea" :autosize="{ minRows: 3, maxRows: 10}" v-model="form.reason_detail" placeholder="原因详情"></el-input>
          </el-col>
          <el-col :span="6">
            <el-button type="primary" @click="saveResult">保存</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <h2>商家{{ diagnose_data.username }}的DNS检测信息</h2>
    <table class="data-table">
      <tbody>
        <tr>
          <th width="200">您的检测时间为</th>
          <td>
              {{diagnose_data.create_date}}
          </td>
        </tr>
        <tr>
            <th>您的 LocalIP</th>
            <td>{{diagnose_data.localip}}</td>
        </tr>
        <tr>
            <th>您的Local DNS IP为</th>
            <td>
                {{diagnose_data.localdns}}
            </td>
        </tr>
        <tr>
            <th>您的Domain为</th>
            <td>
                {{diagnose_data.domain}}
            </td>
        </tr>
        <tr>
            <th>您的操作系统为</th>
            <td>
                {{diagnose_data.os}}
            </td>
        </tr>
        <tr>
            <th>您的浏览器为</th>
            <td>
                {{diagnose_data.browser}}
            </td>
        </tr>
      </tbody>
    </table>
    <h2>以下是内部域名的测试结果</h2>
    <table class="data-table" v-if="diagnose_data.in_network_list">
        <tbody>
        <tr v-for="item in diagnose_data.in_network_list">
            <th width="10%">{{item.name}}</th>
            <td width="30%">{{item.url}}</td>
            <td>网络正常,延迟<span class="result">{{item.val}}</span>毫秒</td>
        </tr>
        </tbody>
    </table>
    <h2>以下是其他域名的测试结果</h2>
    <table class="data-table" v-if="diagnose_data.out_network_list">
        <tbody>
        <tr v-for="item in diagnose_data.out_network_list">
            <th width="10%">{{item.name}}</th>
            <td width="30%">{{item.url}}</td>
            <td>网络正常,延迟<span class="result">{{item.val}}</span>毫秒</td>
        </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    data () {
      return {
        form: {
          status: '',
          reason_type: '',
          reason_detail: ''
        },
        diagnose_data: {
          localIP: '',
          localDNS: '',
          domain: '',
          username: '',
          create_date: '',
          os: '',
          browser: '',
          in_network_list: [],
          out_network_list: []
        }
      }
    },
    mounted () {
      this.fetchDetectData()
    },
    methods: {
      fetchDetectData () {
        // console.log(this.$store.getters.getUserName)
        let recordId = this.$route.params.row_index
        $.ajax({
          type: 'post',
          data: {'record_id': recordId},
          url: '/api/dns/get_dns_detect_data_by_id/',
          dataType: 'json',
          success: (data) => {
            this.form = data.detect_result_data
            this.diagnose_data = data.dns_detect_data
          }
        })
      },
      saveResult () {
        let formData = this.form
        let params = {
          'dns_detect_id': this.$route.params.row_index,
          'service': '',
          'status': formData.status,
          'reason_type': formData.reason_type,
          'reason_detail': formData.reason_detail,
          'op': this.$store.getters.getUserName
        }
        console.log(params)
        $.ajax({
          type: 'post',
          data: params,
          url: '/api/dns/save_dns_result/',
          dataType: 'json',
          success: (data) => {
            if (data.ok) {
              this.$message({
                message: '保存成功',
                type: 'success',
                showClose: true
              })
            } else {
              this.$message({
                message: '保存失败',
                type: 'error',
                showClose: true
              })
            }
          }
        })
      }
    }

  }
</script>
<style>
h2 {
  font-size: 16px;
  display:block;
}
.result {
  color: #3dc6b6;
  font-weight: 400;
}
table th {
    padding: 10px;
    border: 1px solid #eaeaea;
    text-align: left;
    font-weight: 400;
    background-color: #fafafa;
}
</style>
