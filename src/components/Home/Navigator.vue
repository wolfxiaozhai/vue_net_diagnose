<template>
  <div class="home_content">
    <el-row>
      <ZysCard
        :card_outer_links="card_outer_links11"
        :card_item_png="card_item_png"
        :card_title_png="card_title_png11"
        :card_flag="11">
        <template slot="card_title">域名相关</template>
      </ZysCard>
      <ZysCard
        :card_inner_links="card_inner_links12"
        :card_item_png="card_item_png"
        :card_title_png="card_title_png11"
        :card_flag="12">
        <template slot="card_title">网络诊断</template>
      </ZysCard>
    </el-row>
  </div>
</template>

<script>
import TitleDiagnose from '../../assets/images/title_diagnose.png'
import CardItem from '../../assets/images/card_item.png'
export default {
  data () {
    return {
      card_title_png11: TitleDiagnose,
      card_item_png: CardItem,
      card_outer_links11: [
        {
          name: 'http://www.baidu.com/',
          title: '百度一下'
        },
        {
          name: 'http://www.meituan.com',
          title: '美团'
        }
      ],
      card_inner_links12: [
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
