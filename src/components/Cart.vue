<template>
    <ul class="list-group">
        <li class="list-group-item mb-1">
             <span class="item-name">Item Name</span>  : <span class="item-price float-right">Price</span>
             
        </li>
        <li v-for="(item, index) in items" :key="index" class="list-group-item mb-1">
            <span class="item-name">{{item.title}}</span>  <button class="btn btn-sm btn-danger" @click="removeItem(index)"> - </button>  : <span class="item-price float-right">{{item.price}}</span>
             
        </li>
         <li class="list-group-item mb-1">
            <span class="item-price float-right">Total Price : {{totalPrice}}</span>
        </li>
        <li v-if="items.length > 0" class="list-group-item mb-1">
            <button @click="checkout" class="btn btn-sm btn-success">Check Out</button>
        </li>
    </ul>
</template>
<script>
export default {
  //props:['items'],
  computed:{
      items(){
          return this.$store.getters.getCart
      },
      totalPrice(){
            var total = 0;
            this.items.forEach(item => {
                total += parseFloat(item.price);
            })
            return total.toFixed(2)
        }
  }, 
  methods: {
      removeItem(index){
        this.$store.commit('removeItem', index);
      },
      checkout(){
          if(confirm('Are you sure want to check out')){
              this.$store.commit('clearCart');
          }
      }
  }
}


</script>
<style>

</style>
