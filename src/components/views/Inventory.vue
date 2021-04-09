<template>           
    <div v-if="!loading" class="row">
            <div v-for="(item, index) in items" :key="index" class="card">            
                    <router-link :to="{path: '/item/'+ item.id}">
                        <img :src="item.photo" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title"> {{item.title}}</h5>
                        </div>
                    </router-link>
                <div class="card-footer">
                    <p class="card-text">{{item.price}}</p>
                    <a @click="addToCart(item)" class="btn btn-primary"> Add to cart</a>
                </div>
            </div>
        </div>
        <h1 v-else> Loading </h1>
</template>

<script>
import axios from 'axios'
export default {
 //props: ['items'],
 data(){
     return{
         loading : true
        // items: []
     }
 },
 computed:{
     items(){
         return this.$store.getters.getInventory
     }
 },
 mounted(){
     this.fetchInventory();
 },
 methods:{
     addToCart(item){
        //this.$emit('newItemAdded', item);
        this.$store.commit('addToCart', item)
     },
     fetchInventory(){
         var self = this
         axios.get('http://localhost:3000/items').then(response=>{
             //self.items = response.data
             self.$store.commit('setInventory', response.data)
             self.loading = false

         })
     }
 }
}

</script>
<style>

</style>
