import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    query: ''
  },
  getters: {
    query: state => state.query
  },
  actions: {
    querySearch (context, payload) {
      context.commit('querySearch', payload)
    }
  },
  mutations: {
    querySearch (state, payload) {
      state.query = payload
    }
  }
})

export default store
