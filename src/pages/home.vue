<template>
    <div>
        <div class="container">
            <div class="row">
                <h1>SELAMAT DATANG DI BELAJAR VUE</H1>
                <list :threads="threads"/>
               
<!--                
                <div v-for="thread in threads" class="card-panel grey lighten-2">
                    <h2>{{thread.title}}</h2>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import ikiData from '@/data'
import list from '@/components/list'
console.log(ikiData)
export default {
  name: 'Home',
  components: {
    list
  },
  data () {
    return {
      threads: Object.values(ikiData.threads),
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
