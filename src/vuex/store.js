import Vue from 'vue'
import Vuex from 'vuex'
// 告诉 vue “使用” vuex
Vue.use(Vuex)

export default new Vuex.Store({  
  state: {    
    username: ''  
  },  
  mutations: {    
    SET_USERNAME(state, username) {      
      state.username = username;    
    }  
  },  
  actions: {    
    setUserName({commit}, username) {      
      commit('SET_USERNAME', username);    
    }  
  },  
  getters: {    
    getUserName: (state) => state.username 
  }
})
