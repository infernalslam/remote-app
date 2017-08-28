<template>
<div>
  Welcome vuejs : Server
</div>
</template>

<script>
// import axios from '~/plugins/axios'

export default {
  async asyncData () {
    // let { data } = await axios.get('/api/users')
    // return { users: data }
  },
  head () {
    return {
      title: 'Server'
    }
  }
}
</script>
