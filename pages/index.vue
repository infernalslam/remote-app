<template>
<div>
  Hello Client! <br>
  <input type="text" v-model="text">
  <button @click="search()"> submit </button> <br>
  คำที่ค้นหา : {{ text }} <br>
  <div v-for="(src, key) in items" :key="src.id.videoId">
    title : {{ src.snippet.title }} <br>
    link : {{ src.id.videoId }} <br>
    <img :src="src.snippet.thumbnails.high.url">
    <hr>
  </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      text: ''
    }
  },
  methods: {
    search () {
      console.log(this.text)
      this.querySearch(this.text)
    },
    ...mapActions({
      querySearch: 'querySearch'
    })
  },
  computed: {
    ...mapGetters({
      items: 'data'
    })
  }
}
</script>