<template>
  <div id="call-graph" style="width:1000px;height:720px;margin-top:20px">
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  data () {
    return {
      nodes: [],
      links: []
    }
  },
  props: {
    originData: {
      type: Array,
      required: true
    },
    graphTitle: {
      type: String,
      required: true
    },
    layout: {
      type: String,
      required: false,
      default: 'none'
    }
  },
  mounted () {
    this.getNodes()
    this.getLinks()
    this.flot()
  },
  methods: {
    getNodes () {
      let nodes = []
      let tmpNodes = []
      for (let rootIndex in this.originData) {
        let originDataI = this.originData[rootIndex]
        tmpNodes.push(originDataI.root)
        nodes.push(
          {
            'name': originDataI.root,
            'x': 100,
            'y': (parseInt(rootIndex) + 1) * 100,
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
        let coordIndex = parseInt(rootIndex) + 1
        for (let clientIndex in clients) {
          if (tmpNodes.indexOf(clients[clientIndex]) >= 0) {
            continue
          } else {
            tmpNodes.push(clients[clientIndex])
          }
          nodes.push(
            {
              'name': clients[clientIndex],
              'x': (parseInt(rootIndex) + 1) * 200,
              'y': (parseInt(coordIndex) + parseInt(clientIndex)) * 100,
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
          coordIndex += 1
        }
        for (let serverIndex in servers) {
          if (tmpNodes.indexOf(servers[serverIndex]) >= 0) {
            continue
          } else {
            tmpNodes.push(servers[serverIndex])
          }
          nodes.push(
            {
              'name': servers[serverIndex],
              'x': (parseInt(rootIndex) + 1) * 200,
              'y': (parseInt(coordIndex) + parseInt(serverIndex)) * 100,
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
          coordIndex += 1
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
          links.push({'source': clients[clientIndex], 'target': this.originData[rootIndex].root})
        }
        for (let serverIndex in servers) {
          links.push({'source': this.originData[rootIndex].root, 'target': servers[serverIndex]})
        }
      }
      this.links = links
    },
    flot () {
      let myChart = echarts.init(document.getElementById('call-graph'))
      let option = {
        title: {
          text: this.graphTitle
        },
        series: [
          {
            type: 'graph',
            legendHoverLink: true,
            layout: this.layout,
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
