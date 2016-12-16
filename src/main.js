import Vue from 'vue'
import $ from 'jquery'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import { Button, Select, Menu, Table, Form } from 'element-ui'
import App from './App.vue'
import '../src/stylesheet/index.scss';
import routes from './router-config'
import store from './vuex/store'

Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(Button)
Vue.use(Select)

const router = new VueRouter({
  routes
})

/*router.beforeEach((from, next) =>
	$.ajax({
		url: 'http://127.0.0.1:7000/dns/api/get_login_info/',
		type: 'GET',
		dataType: 'json',
		success: (data) => {
			console.log(data);
			if (data.username != '') {
				//this.$store.dispatch('setUserName', data.username)
				store.state.username = data.username
				//this.user_name = this.$store.getters.getUserName;
			}else{
				return next({ path: data.redirect_url })
				next()
			}
		}
    })
)*/

const app = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')