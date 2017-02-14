<template>
  <div>
    <call-graph
      graphTitle="调用关系构建"
      :originData="originData"
      layout="circular"></call-graph>
  </div>
</template>
<script>
export default {
  data () {
    return {
      originData: [
        {
          'root': 'service1',
          'clients': [
            'service11',
            'service12'
          ]
        },
        {
          'root': 'service2',
          'clients': [
            'service21',
            'service22'
          ],
          'servers': [
            'service12'
          ]
        }
      ]
    }
  }
}
</script>
