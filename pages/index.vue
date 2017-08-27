<template>
<div>
  Hello Client! <br>
  <input type="text" v-model="text">
  <button @click="search()"> submit </button> <br>
  คำที่ค้นหา : {{ text }}
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
      query: 'query'
    })
  }
}
</script>