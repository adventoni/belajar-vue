<template>
    <div>
        <div class="card-panel grey lighten-2">
            <ul class="collection">
                <li class="collection-item">
                    <div class="row">
                        <div class="col s12">
                            <router-link :to="`/thread/${thread['.key']}`">{{thread.title}}
                            </router-link><br/>
                            <p>{{jumlahreply}} replies</p>
                            <p>oleh {{user.name}}</p>
                        </div>
                        <div class="col s12"></div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import ikiData from '@/data'
export default {
  props: {
    thread: {
      required: true,
      type: Object
    }
  },
  computed: {
    jumlahreply () {
      return Object.keys(this.thread.posts).length - 1
    },
    user () {
      return ikiData.users[this.thread.userId]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
