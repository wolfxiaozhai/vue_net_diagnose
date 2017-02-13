import ZysCard from './components/zys_card.vue'
import CallGraph from './components/call_graph.vue'

const install = function (Vue) {
  // 注册模块
  Vue.component('ZysCard', ZysCard)
  Vue.component('CallGraph', CallGraph)
}

module.exports = {
  install,
  ZysCard,
  CallGraph
}
