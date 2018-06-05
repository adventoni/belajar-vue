<template>
<div>
  <div class="container">
    <div class="row">
  <h1>THREAD VUE</H1>
  <div class="card-panel grey lighten-2">
      <h2>{{thread.title}}</h2>

  </div>
  </div>
  </div>
  </div>
  </div>
</template>

<script>
import ikiData from '@/data'

export default {
  props: {
    id: {
      required: true,
      type: String
    }
  },
  data () {
    return {
      thread: ikiData.threads[this.id],
      posts: ikiData.posts,
      users: ikiData.users
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grey{
  background-color: #eee;
  padding: 20px;
}
p{
  text-align: left;
}
</style>
