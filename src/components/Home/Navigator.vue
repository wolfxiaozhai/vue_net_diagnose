<template>
  <div class="home_content">
    <el-row>
      <ZysCard :card_outer_links="card_outer_links1">
        <template slot="card_title">域名相关</template>
      </ZysCard>
      <ZysCard :card_links="card_links2">
        <template slot="card_title">网络诊断</template>
      </ZysCard>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      card_outer_links1: [
        {
          name: 'http://www.baidu.com/',
          title: '百度一下'
        },
        {
          name: 'http://www.meituan.com',
          title: '美团'
        }
      ],
      card_links2: [
        {
          name: 'diagnose',
          title: '网络诊断记录'
        }
      ]
    }
  }
}
</script>

<style>
  .home_content {
    padding: 20px 0;
  }
</style>
