<template>
    <div>
        <div class="container">
            <div class="row">
                <h1>Maaf Halaman yang di cari tidak ada, klik   <router-link :to="`/`">disini
                            </router-link> </a> untuk kembali</H1>
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
