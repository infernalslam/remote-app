<template>
<div>
    Cilent Page : {{ query }} <br>
    <input type="text" v-model="text">
    <button @click="search()"> submit </button>
  </div>
</template>

<script>
// import axios from '~/plugins/axios'
import { mapGetters, mapActions } from 'vuex'

export default {
  async asyncData () {
    // let { data } = await axios.get('/api/users')
    // return { users: data }
  },
  head () {
    return {
      title: 'Cilent'
    }
  },
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
      query: 'query'
    })
  }
}
</script>