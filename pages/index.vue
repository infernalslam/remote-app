<template>
<div>
  Welcome vuejs : Clinet <br>
  <input type="text" v-model="text">
  <button @click="search()"> submit </button> <br>
  คำที่ค้นหา : {{ text }} <br>
    <div v-for="src in items" :key="src.id.videoId">
       ชื่อเรื่อง  {{ src.snippet.title }} <br>
       รหัสวิดิโอ  {{ src.id.videoId }} <br>
       <img :src="src.snippet.thumbnails.high.url">
       <hr>
    </div>
</div>
</template>

<script>
// import axios from '~/plugins/axios'
import { mapActions, mapGetters } from 'vuex'
import io from 'socket.io-client'
// io('http://localhost')
// io.connect()
// const socket = io()
// console.log(socket)
// import io from 'socket.io'
// const socket = io()
// console.log(socket)
export default {
  async asyncData () {
    // let { data } = await axios.get('/api/users')
    // return { users: data }
  },
  head () {
    return {
      title: 'Clinet'
    }
  },
  async mounted () {
    const socket = await io()
    console.log(socket)
  },
  data () {
    return {
      text: ''
    }
  },
  methods: {
    search () {
      this.searchQuery(this.text)
    },
    ...mapActions({
      searchQuery: 'search'
    })
  },
  computed: {
    ...mapGetters({
      items: 'data'
    })
  }
}
</script>
