<template>
    <div class="row">
        <h2>Threads</h2>
        <listThread
        v-for="thread in threads"
        :thread="thread" 
        :key="thread['.key']"
        />
    </div>
</template>

<script>
import listThread from './listThread'
export default {
  components: {
    listThread
  },
  props: {
    threads: {
      required: true,
      type: Array
    }
  }
}
</script>
