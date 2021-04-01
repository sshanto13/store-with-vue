<template>
    <ul class="list-group">
        <li class="list-group-item mb-1">
             <span class="item-name">Item Name</span>  : <span class="item-price float-right">Price</span>
             
        </li>
        <li v-for="(item, index) in items" :key="index" class="list-group-item mb-1">
            <span class="item-name">{{item.title}}</span>  <button class="btn btn-sm btn-danger" @click="deleteCartItem(index)"> - </button>  : <span class="item-price float-right">{{item.price}}</span>
             
        </li>
         <li class="list-group-item mb-1">
            <span class="item-price float-right">Total Price : {{totalPrice}}</span>
        </li>
    </ul>
</template>
<script>
export default {
  props:['items'],
  computed:{
      totalPrice(){
            var total = 0;
            this.items.forEach(item => {
                total += parseFloat(item.price);
            })
            return total
        }
  }, 
  methods: {
      deleteCartItem(index){
        this.$emit('itemRemoved', index);
      }
  }
}


</script>
<style>

</style>
