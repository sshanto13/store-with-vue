<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <router-link class="navbar-brand" :to="{path: '/'}">Store with Vue</router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <form @submit.prevent="search" class="d-flex">
              <input v-model="keyword" class="form-control mr-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
    </nav>
</template>

<script>
import axios from 'axios'
export default {
  data(){
       return{
         keyword:''
       }
  },
  methods:{
     search(){
       var self = this
        axios.get('http://localhost:3000/search/' + this.keyword).then(response=>{
          self.$store.commit('setInventory',response.data) 
        })
     }
   }
}
</script>
<style>

</style>