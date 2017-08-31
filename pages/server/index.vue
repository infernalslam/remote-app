<template>
<div>
  Welcome vuejs : Server <br>
  <div v-for="src in playlistUpdate" :key="src.id">
    {{ src.title }} <hr>
  </div>
</div>
</template>

<script>
// import axios from '~/plugins/axios'
import { mapGetters, mapActions } from 'vuex'
import io from 'socket.io-client'

export default {
  async asyncData () {
    // let { data } = await axios.get('/api/users')
    // return { users: data }
  },
  head () {
    return {
      title: 'Server'
    }
  },
  data () {
    return {
      playlistUpdate: []
    }
  },
  async mounted () {
    await this.getPlaylist()
    const socket = await io()
    console.log(socket)
    this.playlistUpdate = this.playlist
    socket.on('post_event_youtube', (data) => {
      this.playlistUpdate = data
    })
  },
  methods: {
    ...mapActions({
      getPlaylist: 'getPlaylist'
    })
  },
  computed: {
    ...mapGetters({
      playlist: 'playlist'
    })
  }
}
</script>
