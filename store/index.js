import Vuex from 'vuex'
import axios from 'axios'

const store = () => {
  return new Vuex.Store({
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
}

export default store
