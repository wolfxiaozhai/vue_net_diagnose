<template>
  <div>
    <call-graph :originData="originData"></call-graph>
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
      ],
      nodes: [],
      links: []
    }
  }
}
</script>
