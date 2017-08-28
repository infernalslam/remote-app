import Vuex from 'vuex'
import axios from '~/plugins/axios'

const store = () => new Vuex.Store({
  state: {
    data: []
  },
  getters: {
    data: state => state.data
  },
  actions: {
    search (ctx, payload) {
      ctx.commit('search', payload)
    }
  },
  mutations: {
    async search (state, payload) {
      axios.get(`/api/query?query=${payload}`).then((res) => {
        state.data = res.data.items
      })
    }
  }
})

export default store
