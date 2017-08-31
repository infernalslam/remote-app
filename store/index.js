import Vuex from 'vuex'
import axios from '~/plugins/axios'

const store = () => new Vuex.Store({
  state: {
    data: [],
    playlist: []
  },
  getters: {
    data: state => state.data,
    playlist: state => state.playlist
  },
  actions: {
    search (ctx, payload) {
      ctx.commit('search', payload)
    },
    postClip (ctx, payload) {
      ctx.commit('postClip', payload)
    },
    getPlaylist (ctx) {
      ctx.commit('getPlaylist')
    }
  },
  mutations: {
    async search (state, payload) {
      axios.get(`/api/query?query=${payload}`).then((res) => {
        state.data = res.data.items
      })
    },
    async postClip (state, payload) {
      axios.post(`/api/post`, payload).then((res) => {
        state.playlist = res.data
      })
    },
    getPlaylist (state) {
      axios.get(`/api/playlist`).then((res) => {
        state.playlist = res.data
      })
    }
  }
})

export default store
