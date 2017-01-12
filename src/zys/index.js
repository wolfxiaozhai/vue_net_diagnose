import ZysCard from './components/zys_card.vue'

const install = function (Vue) {
  // 注册模块
  Vue.component('ZysCard', ZysCard)
}

module.exports = {
  install,
  ZysCard
}
