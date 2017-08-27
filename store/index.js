import Vuex from 'vuex'
import axios from 'axios'

const store = () => {
  return new Vuex.Store({
    state: {
      data: ''
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
        axios.get(`http://localhost:3001/api/youtube?query=${payload}`).then((res) => {
          state.data = res.data.items
          console.log(res.data)
        })
      }
    }
  })
}

export default store
