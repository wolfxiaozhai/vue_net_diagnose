import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: ''
  },
  mutations: {
    SET_USERNAME (state, username) {
      state.username = username
    }
  },
  actions: {
    setUserName ({commit}, username) {
      commit('SET_USERNAME', username)
    }
  },
  getters: {
    getUserName: (state) => state.username
  }
})
