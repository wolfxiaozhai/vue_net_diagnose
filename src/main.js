import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import { Button, Select, Menu, Table, Form } from 'element-ui'
import App from './App.vue'
import OriginData from './components/OriginData.vue'
import EditRow from './components/EditRow.vue'

Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(Button)
Vue.use(Select)

const routes = [
	{path: '/', component: OriginData},
	{path: '/test/edit/:row_index', name: "edit", component: EditRow},
]

const router = new VueRouter({
	routes
})

const app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
