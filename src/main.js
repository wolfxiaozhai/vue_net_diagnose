import Vue from 'vue'
import VueRouter from 'vue-router'

// import Xigua from '@hfe/xigua'
// import '@hfe/xigua/dist/xigua.min.css'
// Xigua.install(Vue)

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import './stylesheet/index.scss'

import './zys/styles/index.scss'
import Zys from './zys/index.js'
Zys.install(Vue)

import { netRoutes, otherRoutes, graphRoutes } from './route/router-config'
import store from './vuex/store'

Vue.use(VueRouter)
Vue.use(ElementUI)

const router = new VueRouter({
  mode: 'hash',
  routes: []
    .concat(netRoutes)
    .concat(otherRoutes)
    .concat(graphRoutes)
})

new Vue({
  el: '#app',
  data: {
    netRoutes
  },
  template: '<App/>',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
