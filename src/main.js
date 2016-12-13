import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import { Button, Select, Menu, Table, Form } from 'element-ui'
import App from './App.vue'
import '../src/stylesheet/index.scss';
import routes from './router-config'

Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(Button)
Vue.use(Select)

const router = new VueRouter({
  routes
})

const app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')