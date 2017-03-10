<template>
  <div id="call-graph" style="width:1000px;height:720px;margin-top:20px">
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  data () {
    return {
      originData: [],
      nodes: [],
      links: []
    }
  },
  props: {
    rootName: {
      type: String,
      required: true
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.originData = [
        {
          'root': 'service1',
          'value': [20, 31],
          'clients': [
            {
              'name': 'service1c1',
              'value': [20, 10]
            },
            {
              'name': 'service1c2',
              'value': [10, 12]
            }
          ]
        },
        {
          'root': 'service2',
          'value': [22, 34],
          'clients': [
            {
              'name': 'service2c1',
              'value': [15, 17]
            },
            {
              'name': 'service2c2',
              'value': [16, 30]
            }
          ],
          'servers': [
            {
              'name': 'service2s1',
              'value': [13, 28]
            }
          ]
        }
      ]
    },
    getNodes () {
      let nodes = []
      for (let rootIndex in this.originData) {
        let originDataI = this.originData[rootIndex]
        nodes.push(
          {
            'name': originDataI.root,
            'value': originDataI.value,
            'x': 50,
            'y': (parseInt(rootIndex)) * 100,
            'label': {
              'normal': {
                'show': true,
                'textStyle': {
                  'color': 'red',
                  'fontSize': 8
                }
              }
            }
          }
        )
        let clients = originDataI.clients
        let servers = originDataI.servers
        for (let clientIndex in clients) {
          nodes.push(
            {
              'name': clients[clientIndex]['name'],
              'value': clients[clientIndex]['value'],
              'x': (parseInt(rootIndex) + 1) * 200,
              'y': (parseInt(clientIndex) + parseInt(rootIndex)) * 150,
              'label': {
                'normal': {
                  'show': true,
                  'textStyle': {
                    'color': 'red',
                    'fontSize': 8
                  }
                }
              }
            }
          )
        }
        for (let serverIndex in servers) {
          nodes.push(
            {
              'name': servers[serverIndex]['name'],
              'value': servers[serverIndex]['value'],
              'x': (parseInt(rootIndex) + 1) * 200,
              'y': (parseInt(serverIndex) + parseInt(rootIndex)) * 200,
              'label': {
                'normal': {
                  'show': true,
                  'textStyle': {
                    'color': 'red',
                    'fontSize': 8
                  }
                }
              }
            }
          )
        }
      }
      this.nodes = nodes
    },
    getLinks () {
      let links = []
      for (let rootIndex in this.originData) {
        let clients = this.originData[rootIndex].clients
        let servers = this.originData[rootIndex].servers
        for (let clientIndex in clients) {
          links.push({'source': clients[clientIndex]['name'], 'target': this.originData[rootIndex].root})
        }
        for (let serverIndex in servers) {
          links.push({'source': this.originData[rootIndex].root, 'target': servers[serverIndex]['name']})
        }
      }
      this.links = links
    },
    flot () {
      let myChart = echarts.init(document.getElementById('call-graph'))
      let option = {
        title: {
          text: this.rootName
        },
        tooltip: {
          show: true,
          formatter: function (params) {
            let res = params['name']
            if (typeof (params['value']) !== 'undefined') {
              res += '<br>' + '指标1: ' + params['value'][0] + '<br>'
              res += '指标2: ' + params['value'][1]
            }
            return res
          }
        },
        toolbox: {
          show: true,
          feature: {
            restore: {},
            saveAsImage: {}
          },
          right: 20
        },
        series: [
          {
            type: 'graph',
            legendHoverLink: true,
            focusNodeAdjacency: true,
            symbolSize: 50,
            roam: true,
            label: {
              normal: {
                show: true
              }
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
              normal: {
                textStyle: {
                  fontSize: 8
                }
              }
            },
            itemStyle: {
              normal: {
                color: '#ccc',
                borderColor: '#1af'
              }
            },
            data: this.nodes,
            links: this.links,
            lineStyle: {
              normal: {
                color: '#1af',
                opacity: 0.9,
                width: 2,
                curveness: 0.2
              }
            }
          }
        ]
      }
      myChart.setOption(option)

      let intervalTimer = null
      myChart.on('click', function (params) {
        clearTimeout(intervalTimer)
        intervalTimer = setTimeout(function () {
          let dottedNodename = params.name
          console.log(dottedNodename)
        }, 150)
      })

      myChart.on('dblclick', function (params) {
        clearTimeout(intervalTimer)
        let url = 'http://www.baidu.com'
        window.open(url, '_blank')
      })
    }
  },
  watch: {
    originData () {
      this.getNodes()
      this.getLinks()
      this.flot()
    }
  }
}
</script>
