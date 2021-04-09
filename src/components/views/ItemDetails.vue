<template>
     <div v-if="item" class="row">
        <div class="col-md-4">
        <img :src="item.photo" alt="">      
        </div>
        <div class="col-md-8">        
             <h1>{{item.title}}</h1>
             <p>{{item.description}}</p>
             <div class="card-footer">
                    <p class="card-text">{{item.price}}</p>
                    <a @click="addToCart(item)" class="btn btn-primary"> Add to cart</a>
              </div>
        </div>
     </div>
     <div v-else>
       <h4> Loading</h4>
     </div>

</template>

<script>
import axios from "axios"
export default {
  data(){
    return{
      item: null
    }
  },
  mounted(){
    this.fetchItem()
  },
  methods:{
    fetchItem(){
        var self = this
        axios.get('http://localhost:3000/item/'+this.$route.params.id).then(response=>{
          self.item = response.data
        })
    },
    addToCart(item){
        this.$store.commit('addToCart', item)
    }
  }

}
</script>

<style>

</style>